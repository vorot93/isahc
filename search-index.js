var searchIndex = JSON.parse('{\
"isahc":{"doc":"The practical HTTP client that is fun to use.","i":[[0,"cookies","isahc","Types for cookie state management.",null,null],[3,"Cookie","isahc::cookies","Information stored about an HTTP cookie.",null,null],[3,"CookieJar","","Provides automatic cookie session management using an…",null,null],[0,"auth","isahc","Types for working with HTTP authentication methods.",null,null],[3,"Credentials","isahc::auth","Credentials consisting of a username and a secret…",null,null],[11,"new","","Create credentials from a username and password.",0,[[]]],[3,"Authentication","","Specifies one or more HTTP authentication schemes to use.",null,null],[11,"none","","Disable all authentication schemes. This is the default.",1,[[]]],[11,"all","","Enable all available authentication schemes.",1,[[]]],[11,"basic","","HTTP Basic authentication.",1,[[]]],[11,"digest","","HTTP Digest authentication.",1,[[]]],[0,"error","isahc","Types for error handling.",null,null],[4,"ErrorKind","isahc::error","A non-exhaustive list of error types that can occur while…",null,null],[13,"BadClientCertificate","","A problem occurred with the local certificate.",2,null],[13,"BadServerCertificate","","The server certificate could not be validated.",2,null],[13,"ClientInitialization","","The HTTP client failed to initialize.",2,null],[13,"ConnectionFailed","","Failed to connect to the server.",2,null],[13,"InvalidContentEncoding","","The server either returned a response using an unknown or…",2,null],[13,"InvalidCredentials","","Provided authentication credentials were rejected by the…",2,null],[13,"InvalidRequest","","The request to be sent was invalid and could not be sent.",2,null],[13,"Io","","An I/O error either sending the request or reading the…",2,null],[13,"NameResolution","","Failed to resolve a host name.",2,null],[13,"ProtocolViolation","","The server made an unrecoverable HTTP protocol violation.…",2,null],[13,"RequestBodyNotRewindable","","Request processing could not continue because the client…",2,null],[13,"Timeout","","A request or operation took longer than the configured…",2,null],[13,"TlsEngine","","An error ocurred in the secure socket engine.",2,null],[13,"TooManyRedirects","","Number of redirects hit the maximum amount.",2,null],[3,"Error","","An error encountered while sending an HTTP request or…",null,null],[11,"kind","","Get the kind of error this represents.",3,[[],["errorkind",4]]],[11,"is_client","","Returns true if this error was likely caused by the client.",3,[[]]],[11,"is_network","","Returns true if this is an error likely related to network…",3,[[]]],[11,"is_server","","Returns true if this error was likely the fault of the…",3,[[]]],[11,"is_tls","","Returns true if this error is related to SSL/TLS.",3,[[]]],[0,"config","isahc","Definition of all client and request configuration options.",null,null],[3,"Dialer","isahc::config","A custom address or dialer for connecting to a host.",null,null],[3,"DialerParseError","","An error which can be returned when parsing a dial address.",null,null],[4,"DnsCache","","DNS caching configuration.",null,null],[13,"Disable","","Disable DNS caching entirely.",4,null],[13,"Timeout","","Enable DNS caching and keep entries in the cache for the…",4,null],[13,"Forever","","Enable DNS caching and cache entries forever.",4,null],[3,"ResolveMap","","A mapping of host and port pairs to IP addresses.",null,null],[4,"RedirectPolicy","","Describes a policy for handling server redirects.",null,null],[13,"None","","Do not apply any special treatment to redirect responses.…",5,null],[13,"Follow","","Follow all redirects automatically.",5,null],[13,"Limit","","Follow redirects automatically up to a maximum number of…",5,null],[3,"CaCertificate","","A public CA certificate bundle file.",null,null],[3,"ClientCertificate","","A public key certificate file.",null,null],[3,"PrivateKey","","A private key file.",null,null],[3,"SslOption","","A flag that can be used to alter the behavior of SSL/TLS…",null,null],[8,"Configurable","","Provides additional methods when building a request for…",null,null],[11,"timeout","","Specify a maximum amount of time that a complete…",6,[[["duration",3]]]],[11,"connect_timeout","","Set a timeout for establishing connections to a host.",6,[[["duration",3]]]],[11,"version_negotiation","","Configure how the use of HTTP versions should be…",6,[[["versionnegotiation",3]]]],[11,"redirect_policy","","Set a policy for automatically following server redirects.",6,[[["redirectpolicy",4]]]],[11,"auto_referer","","Update the `Referer` header automatically when following…",6,[[]]],[11,"cookie_jar","","Set a cookie jar to use to accept, store, and supply…",6,[[["cookiejar",3]]]],[11,"automatic_decompression","","Enable or disable automatic decompression of the response…",6,[[]]],[11,"authentication","","Set one or more default HTTP authentication methods to…",6,[[["authentication",3]]]],[11,"credentials","","Set the credentials to use for HTTP authentication.",6,[[["credentials",3]]]],[11,"tcp_keepalive","","Enable TCP keepalive with a given probe interval.",6,[[["duration",3]]]],[11,"tcp_nodelay","","Enables the `TCP_NODELAY` option on connect.",6,[[]]],[11,"interface","","Bind local socket connections to a particular network…",6,[[]]],[11,"ip_version","","Select a specific IP version when resolving hostnames. If…",6,[[["ipversion",4]]]],[11,"dial","","Specify a socket to connect to instead of the using the…",6,[[]]],[11,"proxy","","Set a proxy to use for requests.",6,[[]]],[11,"proxy_blacklist","","Disable proxy usage for the provided list of hosts.",6,[[]]],[11,"proxy_authentication","","Set one or more HTTP authentication methods to attempt to…",6,[[["authentication",3]]]],[11,"proxy_credentials","","Set the credentials to use for proxy authentication.",6,[[["credentials",3]]]],[11,"max_upload_speed","","Set a maximum upload speed for the request body, in bytes…",6,[[]]],[11,"max_download_speed","","Set a maximum download speed for the response body, in…",6,[[]]],[11,"ssl_client_certificate","","Set a custom SSL/TLS client certificate to use for client…",6,[[["clientcertificate",3]]]],[11,"ssl_ca_certificate","","Set a custom SSL/TLS CA certificate bundle to use for…",6,[[["cacertificate",3]]]],[11,"ssl_ciphers","","Set a list of ciphers to use for SSL/TLS connections.",6,[[]]],[11,"ssl_options","","Set various options for this request that control SSL/TLS…",6,[[["ssloption",3]]]],[11,"title_case_headers","","Enable or disable sending HTTP header names in Title-Case…",6,[[]]],[11,"metrics","","Enable or disable comprehensive per-request metrics…",6,[[]]],[3,"VersionNegotiation","","A strategy for selecting what HTTP versions should be used…",null,null],[11,"latest_compatible","","Always prefer the latest supported version announced by…",7,[[]]],[11,"http10","","Connect via HTTP/1.0 and do not attempt to use a higher…",7,[[]]],[11,"http11","","Connect via HTTP/1.1 and do not attempt to use a higher…",7,[[]]],[11,"http2","","Connect via HTTP/2. Failure to connect will not fall back…",7,[[]]],[11,"http3","","Connect via HTTP/3. Failure to connect will not fall back…",7,[[]]],[3,"NetworkInterface","","Used to configure which local addresses or interfaces…",null,null],[11,"any","","Bind to whatever the networking stack finds suitable. This…",8,[[]]],[11,"name","","Bind to the interface with the given name (such as…",8,[[]]],[11,"host","","Bind to the given local host or address. This can either…",8,[[]]],[4,"IpVersion","","Supported IP versions that can be used.",null,null],[13,"V4","","Use IPv4 addresses only. IPv6 addresses will be ignored.",9,null],[13,"V6","","Use IPv6 addresses only. IPv4 addresses will be ignored.",9,null],[13,"Any","","Use either IPv4 or IPv6 addresses. By default IPv6…",9,null],[0,"prelude","isahc","A \\\"prelude\\\" for importing common Isahc types.",null,null],[3,"AsyncBody","","Contains the body of an asynchronous HTTP request or…",null,null],[3,"Body","","Contains the body of a synchronous HTTP request or response.",null,null],[3,"HttpClient","","An HTTP client for making requests.",null,null],[3,"HttpClientBuilder","","An HTTP client builder, capable of creating custom…",null,null],[3,"ResponseFuture","","A future for a request being executed.",null,null],[3,"Metrics","","An object that holds status updates and progress…",null,null],[8,"RequestExt","","Extension methods on an HTTP request.",null,null],[10,"to_builder","","Create a new request builder with the method, URI, and…",10,[[],["builder",3]]],[10,"send","","Send the HTTP request synchronously using the default…",10,[[],[["result",4],["response",3],["error",3]]]],[10,"send_async","","Sends the HTTP request asynchronously using the default…",10,[[],["responsefuture",3]]],[8,"AsyncReadResponseExt","","Provides extension methods for consuming asynchronous HTTP…",null,null],[10,"copy_to","","Copy the response body into a writer asynchronously.",11,[[],["copyfuture",3]]],[10,"text","","Read the response body as a string asynchronously.",11,[[],["textfuture",3]]],[8,"ReadResponseExt","","Provides extension methods for consuming HTTP response…",null,null],[10,"copy_to","","Copy the response body into a writer.",12,[[["write",8]],["result",6]]],[11,"copy_to_file","","Write the response body to a file.",12,[[["asref",8],["path",3]],["result",6]]],[10,"text","","Read the response body as a string.",12,[[],[["string",3],["result",6]]]],[10,"json","","Deserialize the response body as JSON into a given type.",12,[[],[["result",4],["error",3]]]],[8,"ResponseExt","","Provides extension methods for working with HTTP responses.",null,null],[10,"effective_uri","","Get the effective URI of this response. This value differs…",13,[[],[["option",4],["uri",3]]]],[10,"local_addr","","Get the local socket address of the last-used connection…",13,[[],[["option",4],["socketaddr",4]]]],[10,"remote_addr","","Get the remote socket address of the last-used connection…",13,[[],[["option",4],["socketaddr",4]]]],[10,"cookie_jar","","Get the configured cookie jar used for persisting cookies…",13,[[],[["option",4],["cookiejar",3]]]],[10,"metrics","","If request metrics are enabled for this particular…",13,[[],[["option",4],["metrics",3]]]],[5,"get","","Send a GET request to the given URI.",null,[[],[["result",4],["response",3],["error",3]]]],[5,"get_async","","Send a GET request to the given URI asynchronously.",null,[[],["responsefuture",3]]],[5,"head","","Send a HEAD request to the given URI.",null,[[],[["result",4],["response",3],["error",3]]]],[5,"head_async","","Send a HEAD request to the given URI asynchronously.",null,[[],["responsefuture",3]]],[5,"post","","Send a POST request to the given URI with a given request…",null,[[],[["result",4],["response",3],["error",3]]]],[5,"post_async","","Send a POST request to the given URI asynchronously with a…",null,[[],["responsefuture",3]]],[5,"put","","Send a PUT request to the given URI with a given request…",null,[[],[["result",4],["response",3],["error",3]]]],[5,"put_async","","Send a PUT request to the given URI asynchronously with a…",null,[[],["responsefuture",3]]],[5,"delete","","Send a DELETE request to the given URI.",null,[[],[["result",4],["response",3],["error",3]]]],[5,"delete_async","","Send a DELETE request to the given URI asynchronously.",null,[[],["responsefuture",3]]],[5,"send","","Send an HTTP request and return the HTTP response.",null,[[["into",8],["request",3],["body",3]],[["result",4],["response",3],["error",3]]]],[5,"send_async","","Send an HTTP request and return the HTTP response…",null,[[["into",8],["asyncbody",3],["request",3]],["responsefuture",3]]],[5,"version","","Gets a human-readable string with the version number of…",null,[[]]],[11,"from","isahc::cookies","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","isahc","",16,[[]]],[11,"into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"to_owned","","",19,[[]]],[11,"clone_into","","",19,[[]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"from","","",20,[[]]],[11,"into","","",20,[[]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"into_future","","",20,[[]]],[11,"try_poll","","",20,[[["context",3],["pin",3]],["poll",4]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"to_owned","","",21,[[]]],[11,"clone_into","","",21,[[]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"from","isahc::auth","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","isahc::error","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"to_string","","",2,[[],["string",3]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"to_string","","",3,[[],["string",3]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","isahc::config","",22,[[]]],[11,"into","","",22,[[]]],[11,"to_owned","","",22,[[]]],[11,"clone_into","","",22,[[]]],[11,"to_string","","",22,[[],["string",3]]],[11,"borrow","","",22,[[]]],[11,"borrow_mut","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"to_owned","","",23,[[]]],[11,"clone_into","","",23,[[]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",24,[[]]],[11,"into","","",24,[[]]],[11,"to_owned","","",24,[[]]],[11,"clone_into","","",24,[[]]],[11,"borrow","","",24,[[]]],[11,"borrow_mut","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",25,[[]]],[11,"into","","",25,[[]]],[11,"to_owned","","",25,[[]]],[11,"clone_into","","",25,[[]]],[11,"borrow","","",25,[[]]],[11,"borrow_mut","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"from","","",26,[[]]],[11,"into","","",26,[[]]],[11,"to_owned","","",26,[[]]],[11,"clone_into","","",26,[[]]],[11,"borrow","","",26,[[]]],[11,"borrow_mut","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"from","","",27,[[]]],[11,"into","","",27,[[]]],[11,"to_owned","","",27,[[]]],[11,"clone_into","","",27,[[]]],[11,"borrow","","",27,[[]]],[11,"borrow_mut","","",27,[[]]],[11,"try_from","","",27,[[],["result",4]]],[11,"try_into","","",27,[[],["result",4]]],[11,"type_id","","",27,[[],["typeid",3]]],[11,"from","","",28,[[]]],[11,"into","","",28,[[]]],[11,"to_owned","","",28,[[]]],[11,"clone_into","","",28,[[]]],[11,"borrow","","",28,[[]]],[11,"borrow_mut","","",28,[[]]],[11,"try_from","","",28,[[],["result",4]]],[11,"try_into","","",28,[[],["result",4]]],[11,"type_id","","",28,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"cookie_jar","isahc","",18,[[["cookiejar",3]]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[["vec",3]]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[["string",3]]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[["file",3]]]],[11,"from","","",17,[[]]],[11,"from","","",17,[[["vec",3]]]],[11,"from","","",17,[[]]],[11,"from","","",17,[[["string",3]]]],[11,"from","","",17,[[]]],[11,"from","","",17,[[["option",4]]]],[11,"from","isahc::error","",3,[[["errorkind",4]]]],[11,"from","","",3,[[["error",3]]]],[11,"from","","",3,[[["error",3]],["error",3]]],[11,"from","isahc::config","",23,[[["socketaddr",4]]]],[11,"from","","",4,[[["duration",3]]]],[11,"from","","",8,[[["ipaddr",4]]]],[11,"clone","isahc::cookies","",14,[[],["cookie",3]]],[11,"clone","","",15,[[],["cookiejar",3]]],[11,"clone","isahc","",19,[[],["httpclient",3]]],[11,"clone","","",21,[[],["metrics",3]]],[11,"clone","isahc::auth","",0,[[],["credentials",3]]],[11,"clone","","",1,[[],["authentication",3]]],[11,"clone","isahc::error","",2,[[],["errorkind",4]]],[11,"clone","","",3,[[],["error",3]]],[11,"clone","isahc::config","",22,[[],["dialerparseerror",3]]],[11,"clone","","",23,[[],["dialer",3]]],[11,"clone","","",4,[[],["dnscache",4]]],[11,"clone","","",24,[[],["resolvemap",3]]],[11,"clone","","",5,[[],["redirectpolicy",4]]],[11,"clone","","",25,[[],["clientcertificate",3]]],[11,"clone","","",26,[[],["privatekey",3]]],[11,"clone","","",27,[[],["cacertificate",3]]],[11,"clone","","",28,[[],["ssloption",3]]],[11,"clone","","",7,[[],["versionnegotiation",3]]],[11,"clone","","",8,[[],["networkinterface",3]]],[11,"clone","","",9,[[],["ipversion",4]]],[11,"default","isahc::cookies","",15,[[],["cookiejar",3]]],[11,"default","isahc","",16,[[]]],[11,"default","","",17,[[]]],[11,"default","","",18,[[]]],[11,"default","isahc::auth","",1,[[]]],[11,"default","isahc::config","",23,[[]]],[11,"default","","",4,[[]]],[11,"default","","",24,[[],["resolvemap",3]]],[11,"default","","",5,[[]]],[11,"default","","",28,[[]]],[11,"default","","",7,[[]]],[11,"default","","",8,[[]]],[11,"default","","",9,[[]]],[11,"eq","isahc::cookies","",14,[[]]],[11,"eq","","",14,[[["string",3]]]],[11,"eq","isahc::error","",2,[[["errorkind",4]]]],[11,"eq","","",3,[[["errorkind",4]]]],[11,"eq","isahc::config","",22,[[["dialerparseerror",3]]]],[11,"ne","","",22,[[["dialerparseerror",3]]]],[11,"eq","","",5,[[["redirectpolicy",4]]]],[11,"ne","","",5,[[["redirectpolicy",4]]]],[11,"fmt","isahc::cookies","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","isahc","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","","",19,[[["formatter",3]],["result",6]]],[11,"fmt","","",20,[[["formatter",3]],["result",6]]],[11,"fmt","","",21,[[["formatter",3]],["result",6]]],[11,"fmt","isahc::auth","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","isahc::error","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","isahc::config","",22,[[["formatter",3]],["result",6]]],[11,"fmt","","",23,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",24,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",25,[[["formatter",3]],["result",6]]],[11,"fmt","","",26,[[["formatter",3]],["result",6]]],[11,"fmt","","",27,[[["formatter",3]],["result",6]]],[11,"fmt","","",28,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","isahc::error","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","isahc::config","",22,[[["formatter",3]],["result",6]]],[11,"bitor","isahc::auth","",1,[[]]],[11,"bitor","isahc::config","",28,[[]]],[11,"bitor_assign","isahc::auth","",1,[[]]],[11,"bitor_assign","isahc::config","",28,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_from","","",23,[[["string",3]],["result",4]]],[11,"try_from","","",23,[[["uri",3]],["result",4]]],[11,"from_str","","",23,[[],["result",4]]],[11,"source","isahc::error","",3,[[],[["option",4],["stderror",8]]]],[11,"read","isahc","",16,[[],["result",6]]],[11,"poll","","",20,[[["pin",3],["context",3]],["poll",4]]],[11,"poll_read","","",17,[[["pin",3],["context",3]],[["poll",4],["result",6]]]],[11,"name","isahc::cookies","Get the name of the cookie.",14,[[]]],[11,"value","","Get the value of the cookie.",14,[[]]],[11,"new","","Create a new, empty cookie jar.",15,[[]]],[11,"get_by_name","","Get a cookie by name for the given URI.",15,[[["uri",3]],[["option",4],["cookie",3]]]],[11,"get_for_uri","","Get a copy of all the cookies in the jar that match the…",15,[[["uri",3]]]],[11,"clear","","Remove all cookies from this cookie jar.",15,[[]]],[11,"empty","isahc","Create a new empty body.",16,[[]]],[11,"from_bytes_static","","Create a new body from a potentially static byte buffer.",16,[[]]],[11,"from_reader","","Create a streaming body that reads from the given reader.",16,[[]]],[11,"from_reader_sized","","Create a streaming body with a known length.",16,[[]]],[11,"is_empty","","Report if this body is empty.",16,[[]]],[11,"len","","Get the size of the body, if known.",16,[[],["option",4]]],[11,"reset","","If this body is repeatable, reset the body stream back to…",16,[[]]],[11,"empty","","Create a new empty body.",17,[[]]],[11,"from_bytes_static","","Create a new body from a potentially static byte buffer.",17,[[]]],[11,"from_reader","","Create a streaming body that reads from the given reader.",17,[[]]],[11,"from_reader_sized","","Create a streaming body with a known length.",17,[[]]],[11,"is_empty","","Report if this body is empty.",17,[[]]],[11,"len","","Get the size of the body, if known.",17,[[],["option",4]]],[11,"reset","","If this body is repeatable, reset the body stream back to…",17,[[]]],[11,"new","","Create a new builder for building a custom client. All…",18,[[]]],[11,"cookies","","Enable persistent cookie handling for all requests using…",18,[[]]],[11,"connection_cache_ttl","","Set the maximum time-to-live (TTL) for connections to…",18,[[["duration",3]]]],[11,"max_connections","","Set a maximum number of simultaneous connections that this…",18,[[]]],[11,"max_connections_per_host","","Set a maximum number of simultaneous connections that this…",18,[[]]],[11,"connection_cache_size","","Set the size of the connection cache.",18,[[]]],[11,"dns_cache","","Configure DNS caching.",18,[[]]],[11,"dns_resolve","","Set a mapping of DNS resolve overrides.",18,[[["resolvemap",3]]]],[11,"default_header","","Add a default header to be passed with every request.",18,[[]]],[11,"default_headers","","Set the default headers to include in every request,…",18,[[]]],[11,"build","","Build an [`HttpClient`] using the configured options.",18,[[],[["httpclient",3],["result",4],["error",3]]]],[11,"new","","Create a new HTTP client using the default configuration.",19,[[],[["result",4],["error",3]]]],[11,"builder","","Create a new [`HttpClientBuilder`] for building a custom…",19,[[],["httpclientbuilder",3]]],[11,"cookie_jar","","Get the configured cookie jar for this HTTP client, if any.",19,[[],[["option",4],["cookiejar",3]]]],[11,"get","","Send a GET request to the given URI.",19,[[],[["result",4],["response",3],["error",3]]]],[11,"get_async","","Send a GET request to the given URI asynchronously.",19,[[],["responsefuture",3]]],[11,"head","","Send a HEAD request to the given URI.",19,[[],[["result",4],["response",3],["error",3]]]],[11,"head_async","","Send a HEAD request to the given URI asynchronously.",19,[[],["responsefuture",3]]],[11,"post","","Send a POST request to the given URI with a given request…",19,[[],[["result",4],["response",3],["error",3]]]],[11,"post_async","","Send a POST request to the given URI asynchronously with a…",19,[[],["responsefuture",3]]],[11,"put","","Send a PUT request to the given URI with a given request…",19,[[],[["result",4],["response",3],["error",3]]]],[11,"put_async","","Send a PUT request to the given URI asynchronously with a…",19,[[],["responsefuture",3]]],[11,"delete","","Send a DELETE request to the given URI.",19,[[],[["result",4],["response",3],["error",3]]]],[11,"delete_async","","Send a DELETE request to the given URI asynchronously.",19,[[],["responsefuture",3]]],[11,"send","","Send an HTTP request and return the HTTP response.",19,[[["request",3]],[["result",4],["response",3],["error",3]]]],[11,"send_async","","Send an HTTP request and return the HTTP response…",19,[[["request",3]],["responsefuture",3]]],[11,"upload_progress","","Number of bytes uploaded / estimated total.",21,[[]]],[11,"upload_speed","","Average upload speed so far in bytes/second.",21,[[]]],[11,"download_progress","","Number of bytes downloaded / estimated total.",21,[[]]],[11,"download_speed","","Average download speed so far in bytes/second.",21,[[]]],[11,"name_lookup_time","","Get the total time from the start of the request until DNS…",21,[[],["duration",3]]],[11,"connect_time","","Get the amount of time taken to establish a connection to…",21,[[],["duration",3]]],[11,"secure_connect_time","","Get the amount of time spent on TLS handshakes.",21,[[],["duration",3]]],[11,"transfer_start_time","","Get the time it took from the start of the request until…",21,[[],["duration",3]]],[11,"transfer_time","","Get the amount of time spent performing the actual request…",21,[[],["duration",3]]],[11,"total_time","","Get the total time for the entire request. This will…",21,[[],["duration",3]]],[11,"redirect_time","","If automatic redirect following is enabled, gets the total…",21,[[],["duration",3]]],[11,"copy_to_file","","Write the response body to a file.",12,[[["asref",8],["path",3]],["result",6]]],[11,"ip_socket","isahc::config","Connect to the given IP socket.",23,[[]]],[11,"unix_socket","","Connect to a Unix socket described by a file.",23,[[]]],[11,"new","","Create a new empty resolve map.",24,[[]]],[11,"add","","Add a DNS mapping for a given host and port pair.",24,[[]]],[11,"pem_file","","Get a certificate from a PEM-encoded file.",25,[[]]],[11,"der_file","","Get a certificate from a DER-encoded file.",25,[[]]],[11,"p12_file","","Get a certificate from a PKCS#12-encoded file.",25,[[]]],[11,"pem_file","","Get a PEM-encoded private key file.",26,[[]]],[11,"der_file","","Get a DER-encoded private key file.",26,[[]]],[11,"file","","Get a CA certificate from a path to a certificate bundle…",27,[[]]],[18,"NONE","","An empty set of options. This is the default.",28,null],[18,"DANGER_ACCEPT_INVALID_CERTS","","Disables certificate validation.",28,null],[18,"DANGER_ACCEPT_INVALID_HOSTS","","Disables hostname verification on certificates.",28,null],[18,"DANGER_ACCEPT_REVOKED_CERTS","","Disables certificate revocation checks for backends where…",28,null]],"p":[[3,"Credentials"],[3,"Authentication"],[4,"ErrorKind"],[3,"Error"],[4,"DnsCache"],[4,"RedirectPolicy"],[8,"Configurable"],[3,"VersionNegotiation"],[3,"NetworkInterface"],[4,"IpVersion"],[8,"RequestExt"],[8,"AsyncReadResponseExt"],[8,"ReadResponseExt"],[8,"ResponseExt"],[3,"Cookie"],[3,"CookieJar"],[3,"Body"],[3,"AsyncBody"],[3,"HttpClientBuilder"],[3,"HttpClient"],[3,"ResponseFuture"],[3,"Metrics"],[3,"DialerParseError"],[3,"Dialer"],[3,"ResolveMap"],[3,"ClientCertificate"],[3,"PrivateKey"],[3,"CaCertificate"],[3,"SslOption"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);