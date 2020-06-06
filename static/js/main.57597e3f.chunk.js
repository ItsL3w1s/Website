(this["webpackJsonpcsm-website"]=this["webpackJsonpcsm-website"]||[]).push([[0],{25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},31:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(10),o=a.n(r),i=(a(30),a(31),a(13)),s=a(11),c=a(12),u=a(23),m=a(24),d=a(17),h=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"getting-started"},"Getting Started"),n.a.createElement("ol",null,n.a.createElement("li",null,"Depending on where your purchased Cities: Skylines, there are a few different ways of acquiring the multiplayer mod:",n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"Steam Workshop:")," Click on"," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1558438291"},"this link")," ","to visit the steam workshop page, click 'subscribe' to install the mod."),n.a.createElement("li",null,n.a.createElement("strong",null,"Manual Download: ")," You can also manually download releases using GitHub"," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/CitiesSkylinesMultiplayer/CSM/releases"},"here"),". Find the version that you want (both the client and host must use the same version), and then download the .zip file under 'assets'."),n.a.createElement("li",null,n.a.createElement("strong",null,"Custom Download: ")," You can also download unreleased versions of the mod as soon as any code changes are made. Navigate to the list of CI builds"," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/CitiesSkylinesMultiplayer/CSM/actions?query=workflow%3ACI+is%3Asuccess+branch%3Amaster"},"here"),", and click on the latest build (remember, both the client and host must use the same version). Under the artifacts heading, click on the 'CSM [Version]' link to download."),n.a.createElement("li",null,n.a.createElement("strong",null,"From Source: ")," You can also build the mod from source, see the resources"," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/CitiesSkylinesMultiplayer/CSM/wiki/Developer-Resources"},"here")," ","for more information."))),n.a.createElement("li",null,n.a.createElement("strong",null,"If you downloaded the mod")," you will need to install it. First extract the downloaded .zip archive. There are two methods to install the mod:",n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"Installer: "),"If running on windows, right click the 'install.ps1' file and click 'Run with PowerShell'. If running on macOS or Linux, you will need"," ",n.a.createElement("a",{href:"https://github.com/PowerShell/PowerShell",rel:"noopener noreferrer",target:"_blank"},"PowerShell Core")," ","installed. Run ",n.a.createElement("code",null,"pwsh install.ps1"),"."),n.a.createElement("li",null,n.a.createElement("strong",null,"Manually: ")," Create a new folder in the following location called 'CSM':",n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"Windows: "),n.a.createElement("code",null,"%LOCALAPPDATA%\\Colossal Order\\Cities_Skylines\\Addons\\Mods\\")),n.a.createElement("li",null,n.a.createElement("strong",null,"macOS: "),n.a.createElement("code",null,"~/Library/Application Support/Colossal Order/Cities_Skylines/Addons/Mods")),n.a.createElement("li",null,n.a.createElement("strong",null,"Linux: "),n.a.createElement("code",null,"~/.local/share/Colossal Order/Cities_Skylines/Addons/Mods"))),n.a.createElement("li",null,"Copy all of the .dll files from the downloaded archive to the new folder you just created (everything apart from"," ",n.a.createElement("code",null,"install.ps1"),").")))),n.a.createElement("li",null,n.a.createElement("strong",null,"IMPORTANT: ")," After launching Cities: Skylines, you must first enable the mod within 'Content Manager' or it will not appear!"),n.a.createElement("li",null,"The mod is now installed and enabled, have fun!")))},p=a(21),E=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"usage"},"Usage"),n.a.createElement("h3",{id:"usage-general"},"General"),n.a.createElement("p",null,"The Cities: Skylines Multiplayer mod enable multiplayer via a client-server approach. This means one player will act as the host (or server), and other players will connect to them. Decided which player will be the host (the host will have a little more work to do in order to play, and will have the multiplayer save on their computer)."),n.a.createElement("h3",{id:"usage-host"},"Host"),n.a.createElement("p",null,n.a.createElement("strong",null,"Please Note: ")," You may need to port forward your router depending on which connection method you use. More information about this is mentioned below."),n.a.createElement("ol",null,n.a.createElement("li",null,"Ensure that the mod is installed and enabled."),n.a.createElement("li",null,"Either create a new map, or open an existing save. It's highly recommend that you"," ",n.a.createElement("strong",null,"backup any saves before you play on multiplayer!"),n.a.createElement("br",null),"Saves are located in the following locations:",n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"Windows: "),n.a.createElement("code",null,"%LOCALAPPDATA%\\Colossal Order\\Cities_Skylines\\Saves\\")),n.a.createElement("li",null,n.a.createElement("strong",null,"macOS: "),n.a.createElement("code",null,"~/Library/Application Support/Colossal Order/Cities_Skylines/Saves")),n.a.createElement("li",null,n.a.createElement("strong",null,"Linux: "),n.a.createElement("code",null,"~/.local/share/Colossal Order/Cities_Skylines/Saves")))),n.a.createElement("li",null,"Click on the 'Multiplayer' button on the top left of your screen to open the multiplayer menu."),n.a.createElement("li",null,"Update any of the fields to your liking, click 'Create Server'."),n.a.createElement("li",null,"You should see a message saying that the server has started.")),n.a.createElement("h4",{id:"port-forwarding"},"Port Forwarding Strategies"),n.a.createElement("p",null,"This mod requires the host (or server) to expose the port '4230' (or whatever port was entered) to the internet."),n.a.createElement("p",null,n.a.createElement("strong",null,"Note: Only the host needs to port forward! If you are only playing locally (see below), you do not need to port forward!")),n.a.createElement("h5",{id:"port-forwarding-router"},"Port forwarding your router"),n.a.createElement("p",null,"You will need to port forward either port '4230' or whatever port you set when hosting the game. There are many tutorials online that explain this such as"," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/"},"this"),"."),n.a.createElement("h5",{id:"port-forwarding-tunneling"},"Using a tunneling service"),n.a.createElement("p",null,"If you can't port forward your router (don't have access to the router, Internet Service Provider (ISP) restrictions etc.) you can use a tunneling service such as"," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.vpn.net/"},"Hamachi"),"."),n.a.createElement("p",null,"An amazing tutorial on how to use Hamachi with Cities: Skylines Multiplayer by Selim Hjorthall:"),n.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},n.a.createElement("iframe",{title:"Hamachi tutorial by Selim Hjorthall on YouTube",className:"embed-responsive-item",src:"https://www.youtube.com/embed/aYFzwULLrb0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),n.a.createElement("br",null),n.a.createElement("h4",{id:"which-ip"},"Which IP address do players use?"),n.a.createElement("p",null,"The IP address used for connecting will depend on which port forwarding strategy you used above and how/where your planning on playing the game."),n.a.createElement("p",null,n.a.createElement("strong",null,"Note: "),"For your convenience, the mod will display both your local network IP address and external network IP address within the server hosting menu."),n.a.createElement("p",null,"If you and your friends are on the same network (think LAN party, or same household) follow these steps:"),n.a.createElement("ol",null,n.a.createElement("li",null,"Open the command prompt (on Windows 10 you click the start button and type in 'cmd' and hit enter)."),n.a.createElement("li",null,"Type in ",n.a.createElement("code",null,"ipconfig"),"."),n.a.createElement("li",null,"You should see something similar the the image below (note: you may see multiple adapters, usually the adapter with a valid 'Default Gateway' is the one you want to look at), the IPv4 address highlighted is the address that players on your local network should use to connect to the server.",n.a.createElement("br",null),n.a.createElement(p.a,{className:"mt-2",alt:"ipconfig command with 'IPv4 Address highlighted'",src:"/assets/ipconfig.png",fluid:!0,rounded:!0}))),n.a.createElement("p",null,"If you and your friends are playing over the internet, you have two choices: If you port forwarded your router, simple google 'What's my IP address' and send that address to any players. If you used a tunneling service like"," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.vpn.net/"},"Hamachi"),", you will need to use the IP address that is provided there."),n.a.createElement("h3",{id:"usage-players"},"Players"),n.a.createElement("ol",null,n.a.createElement("li",null,"Ensure that the mod is installed and enabled."),n.a.createElement("li",null,"Click the 'Join Game' button on the main menu."),n.a.createElement("li",null,"Enter the host (server) information, alongside your name."),n.a.createElement("li",null,"Click 'Connect to Server' and wait up to 60 seconds (it should usually take less than 5 seconds to connect).")))},y=a(19);var g=function(){return y.a.initialize("UA-37972059-10"),y.a.pageview("/"),n.a.createElement("div",{className:"App"},n.a.createElement(i.a,{bg:"dark",variant:"dark",expand:"lg",className:"shadow-sm"},n.a.createElement(c.a,null,n.a.createElement(i.a.Brand,null,"Cities: Skylines Multiplayer"),n.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(s.a,{className:"mr-auto"},n.a.createElement(s.a.Link,{target:"_blank",href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1558438291"},"Steam Workshop"),n.a.createElement(s.a.Link,{target:"_blank",href:"https://www.patreon.com/CSM_MultiplayerMod"},"Patreon"),n.a.createElement(s.a.Link,{target:"_blank",href:"https://discord.gg/RjACPhd"},"Discord Server"),n.a.createElement(s.a.Link,{target:"_blank",href:"https://github.com/CitiesSkylinesMultiplayer/CSM/"},"GitHub"))))),n.a.createElement(u.a,{fluid:!0},n.a.createElement(c.a,null,n.a.createElement("h1",null,"Welcome"),n.a.createElement("p",null,"Cities: Skylines Multiplayer (CSM) is an in-development multiplayer mod for Cities: Skylines. ",n.a.createElement("br",null),"This mod aims to provide a simple client-server experience where users can play and build together in a single game."))),n.a.createElement(c.a,{className:"js-toc-content"},n.a.createElement(m.a,null,n.a.createElement(d.a,{sm:12,md:9},n.a.createElement(h,null),n.a.createElement(E,null)),n.a.createElement(d.a,{sm:12,md:3,className:"d-none d-lg-block"},n.a.createElement("div",{className:"js-toc sticky-top"})))),n.a.createElement("footer",{className:"Footer pt-3 pb-1 mt-5"},n.a.createElement(c.a,null,n.a.createElement("p",null,n.a.createElement("small",null,"This website and mod are in no way affiliated with Cities: Skylines or Paradox Interactive / Colossal Order")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(18);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),w.init({tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3, h4, h5, h6",collapseDepth:3}),w.refresh()}},[[25,1,2]]]);
//# sourceMappingURL=main.57597e3f.chunk.js.map