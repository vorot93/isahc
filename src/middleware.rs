//! HTTP client middleware API.
//!
//! This module provides the core types and functions for defining and working
//! with middleware. Middleware are handlers that augment HTTP client
//! functionality by applying transformations to HTTP requests before they are
//! sent and/or HTTP responses after they are received.

use crate::Body;
use futures_core::future::LocalBoxFuture;
use futures_util::future::{self, FutureExt};
use http::{Request, Response};
use std::convert::{identity, TryFrom};
use std::error::Error;

pub type Result<'m, T> = LocalBoxFuture<'m, std::result::Result<T, Box<dyn Error>>>;

/// Base trait for middleware.
///
/// Since clients may be used to send requests concurrently, all middleware must
/// be synchronized and must be able to account for multiple requests being made
/// in parallel.
pub trait Middleware: Send + Sync + 'static {
    /// Transform a request before it is sent.
    fn before<'m>(&'m self, request: Request<Body>) -> Result<'m, BeforeAction> {
        future::ok(request.into()).boxed_local()
    }

    /// Transform a response after it is received.
    fn after<'m>(&'m self, response: Response<Body>) -> Result<'m, Response<Body>> {
        future::ok(response).boxed_local()
    }
}

/// An action performed by middleware before sending a request.
pub enum BeforeAction {
    /// Continue performing the request. The request to perform is included, and
    /// may differ from the original request.
    Continue(Request<Body>),

    /// Finish the request here with the given response. The request will not be
    /// sent over the wire.
    Break(Response<Body>),
}

impl BeforeAction {
    pub(crate) fn into_request(self) -> Option<Request<Body>> {
        match self {
            BeforeAction::Continue(request) => Some(request),
            BeforeAction::Break(_) => None,
        }
    }

    pub(crate) fn into_response(self) -> Option<Response<Body>> {
        match self {
            BeforeAction::Continue(_) => None,
            BeforeAction::Break(response) => Some(response),
        }
    }
}

impl From<Request<Body>> for BeforeAction {
    fn from(request: Request<Body>) -> Self {
        BeforeAction::Continue(request)
    }
}

impl From<Response<Body>> for BeforeAction {
    fn from(response: Response<Body>) -> Self {
        BeforeAction::Break(response)
    }
}
