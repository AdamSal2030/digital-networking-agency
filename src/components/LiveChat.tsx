"use client";

import Script from "next/script";

declare global {
  interface Window {
    __lc?: { license?: number | string; integration_name?: string; product_name?: string; [k: string]: any };
    LiveChatWidget?: any;
  }
}

export default function LiveChat() {
  const license = process.env.NEXT_PUBLIC_LIVECHAT_LICENSE;

  // Don’t mount if license missing, or if you only want it in prod:
  // if (process.env.NODE_ENV !== "production") return null;
  if (!license) return null;

  return (
    <>
      {/* init + load tracking.js once */}
      <Script id="livechat-init" strategy="afterInteractive">
        {`
          window.__lc = window.__lc || {};
          window.__lc.license = ${JSON.stringify(license)};
          window.__lc.integration_name = "manual_onboarding";
          window.__lc.product_name = "livechat";
          (function(n,t,c){
            function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
            var e={_q:[],_h:null,_v:"2.0",
              on:function(){i(["on",c.call(arguments)])},
              once:function(){i(["once",c.call(arguments)])},
              off:function(){i(["off",c.call(arguments)])},
              get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},
              call:function(){i(["call",c.call(arguments)])},
              init:function(){
                var n=t.createElement("script");
                n.async=!0;n.type="text/javascript";
                n.src="https://cdn.livechatinc.com/tracking.js";
                t.head.appendChild(n)
              }
            };
            !n.__lc.asyncInit && e.init();
            n.LiveChatWidget = n.LiveChatWidget || e;
          })(window,document,[].slice);
        `}
      </Script>

      {/* Optional <noscript> fallback */}
      <noscript>
        <a href="https://www.livechat.com/chat-with/19329523/" rel="nofollow">
          Chat with us
        </a>
        , powered by{" "}
        <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">
          LiveChat
        </a>
      </noscript>
    </>
  );
}
