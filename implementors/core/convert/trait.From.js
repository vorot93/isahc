(function() {var implementors = {};
implementors["isahc"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; for <a class=\"struct\" href=\"isahc/struct.Body.html\" title=\"struct isahc::Body\">Body</a>","synthetic":false,"types":["isahc::body::sync::Body"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"isahc/struct.Body.html\" title=\"struct isahc::Body\">Body</a>","synthetic":false,"types":["isahc::body::sync::Body"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'_ [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"isahc/struct.Body.html\" title=\"struct isahc::Body\">Body</a>","synthetic":false,"types":["isahc::body::sync::Body"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"isahc/struct.Body.html\" title=\"struct isahc::Body\">Body</a>","synthetic":false,"types":["isahc::body::sync::Body"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"isahc/struct.Body.html\" title=\"struct isahc::Body\">Body</a>","synthetic":false,"types":["isahc::body::sync::Body"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/fs/struct.File.html\" title=\"struct std::fs::File\">File</a>&gt; for <a class=\"struct\" href=\"isahc/struct.Body.html\" title=\"struct isahc::Body\">Body</a>","synthetic":false,"types":["isahc::body::sync::Body"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; for <a class=\"struct\" href=\"isahc/struct.AsyncBody.html\" title=\"struct isahc::AsyncBody\">AsyncBody</a>","synthetic":false,"types":["isahc::body::AsyncBody"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"isahc/struct.AsyncBody.html\" title=\"struct isahc::AsyncBody\">AsyncBody</a>","synthetic":false,"types":["isahc::body::AsyncBody"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'_ [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"isahc/struct.AsyncBody.html\" title=\"struct isahc::AsyncBody\">AsyncBody</a>","synthetic":false,"types":["isahc::body::AsyncBody"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"isahc/struct.AsyncBody.html\" title=\"struct isahc::AsyncBody\">AsyncBody</a>","synthetic":false,"types":["isahc::body::AsyncBody"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"isahc/struct.AsyncBody.html\" title=\"struct isahc::AsyncBody\">AsyncBody</a>","synthetic":false,"types":["isahc::body::AsyncBody"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Self&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"isahc/struct.AsyncBody.html\" title=\"struct isahc::AsyncBody\">AsyncBody</a>","synthetic":false,"types":["isahc::body::AsyncBody"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/std/net/addr/enum.SocketAddr.html\" title=\"enum std::net::addr::SocketAddr\">SocketAddr</a>&gt; for <a class=\"struct\" href=\"isahc/config/struct.Dialer.html\" title=\"struct isahc::config::Dialer\">Dialer</a>","synthetic":false,"types":["isahc::config::dial::Dialer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>&gt; for <a class=\"enum\" href=\"isahc/config/enum.DnsCache.html\" title=\"enum isahc::config::DnsCache\">DnsCache</a>","synthetic":false,"types":["isahc::config::dns::DnsCache"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/std/net/ip/enum.IpAddr.html\" title=\"enum std::net::ip::IpAddr\">IpAddr</a>&gt; for <a class=\"struct\" href=\"isahc/config/struct.NetworkInterface.html\" title=\"struct isahc::config::NetworkInterface\">NetworkInterface</a>","synthetic":false,"types":["isahc::config::NetworkInterface"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"isahc/error/enum.ErrorKind.html\" title=\"enum isahc::error::ErrorKind\">ErrorKind</a>&gt; for <a class=\"struct\" href=\"isahc/error/struct.Error.html\" title=\"struct isahc::error::Error\">Error</a>","synthetic":false,"types":["isahc::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"isahc/error/struct.Error.html\" title=\"struct isahc::error::Error\">Error</a>","synthetic":false,"types":["isahc::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.3/http/error/struct.Error.html\" title=\"struct http::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"isahc/error/struct.Error.html\" title=\"struct isahc::error::Error\">Error</a>","synthetic":false,"types":["isahc::error::Error"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()