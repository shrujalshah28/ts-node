(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),o=(n(0),n(86)),r={title:"Configuration"},c={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"You can set options by passing them before the script path, via programmatic usage, via tsconfig.json, or via environment variables.",source:"@site/docs/configuration.md",slug:"/configuration",permalink:"/ts-node/docs/configuration",editUrl:"https://github.com/TypeStrong/ts-node/edit/master/website/docs/configuration.md",version:"current",sidebar:"primarySidebar",previous:{title:"How It Works",permalink:"/ts-node/docs/how-it-works"},next:{title:"Imports: CommonJS vs native modules",permalink:"/ts-node/docs/imports"}},l=[{value:"Options via tsconfig.json (recommended)",id:"options-via-tsconfigjson-recommended",children:[{value:"Finding <code>tsconfig.json</code>",id:"finding-tsconfigjson",children:[]}]},{value:"CLI Options",id:"cli-options",children:[]},{value:"CLI and Programmatic Options",id:"cli-and-programmatic-options",children:[]},{value:"Programmatic-only Options",id:"programmatic-only-options",children:[]},{value:"<code>node</code> flags",id:"node-flags",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can set options by passing them before the script path, via programmatic usage, via ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json"),", or via environment variables."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"ts-node --compiler ntypescript --project src/tsconfig.json hello-world.ts\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/TypeStrong/ntypescript#readme"}),Object(o.b)("inlineCode",{parentName:"a"},"ntypescript"))," is an example of a TypeScript-compatible ",Object(o.b)("inlineCode",{parentName:"p"},"compiler"),"."),Object(o.b)("h2",{id:"options-via-tsconfigjson-recommended"},"Options via tsconfig.json (recommended)"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ts-node")," loads ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," automatically. Use this recommended configuration as a starting point."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsonc"}),'// tsconfig.json\n{\n  "ts-node": {\n    // Most ts-node options can be specified here using their programmatic, camel-case names.\n    "transpileOnly": true, // It is faster to skip typechecking.  Remove if you want ts-node to do typechecking\n    "files": true,\n    "compilerOptions": {\n      // typescript compilerOptions specified here will override those declared below, but *only* in ts-node\n    }\n  },\n\n  "compilerOptions": {\n    // Copied from @tsconfig/node10: https://github.com/tsconfig/bases/blob/master/bases/node10.json\n    "lib": ["es2018"],\n    "module": "commonjs",\n    "target": "es2018",\n\n    "strict": true,\n    "esModuleInterop": true,\n    "skipLibCheck": true,\n    "forceConsistentCasingInFileNames": true\n  }\n}\n')),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"--skip-project")," to skip loading the ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),Object(o.b)("p",null,"Our bundled ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://unpkg.com/browse/ts-node@8.8.2/tsconfig.schema.json"}),"JSON schema")," lists all compatible options."),Object(o.b)("h3",{id:"finding-tsconfigjson"},"Finding ",Object(o.b)("inlineCode",{parentName:"h3"},"tsconfig.json")),Object(o.b)("p",null,"It is resolved relative to ",Object(o.b)("inlineCode",{parentName:"p"},"--dir")," using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"}),"the same search behavior as ",Object(o.b)("inlineCode",{parentName:"a"},"tsc")),".  In ",Object(o.b)("inlineCode",{parentName:"p"},"--script-mode"),", this is the directory containing the script.  Otherwise it is resolved relative to ",Object(o.b)("inlineCode",{parentName:"p"},"process.cwd()"),", which matches the behavior of ",Object(o.b)("inlineCode",{parentName:"p"},"tsc"),"."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"--project")," to specify the path to your ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json"),", ignoring ",Object(o.b)("inlineCode",{parentName:"p"},"--dir"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tip"),": You can use ",Object(o.b)("inlineCode",{parentName:"p"},"ts-node")," together with ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/tsconfig-paths"}),"tsconfig-paths")," to load modules according to the ",Object(o.b)("inlineCode",{parentName:"p"},"paths")," section in ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),Object(o.b)("h2",{id:"cli-options"},"CLI Options"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ts-node")," supports ",Object(o.b)("inlineCode",{parentName:"p"},"--print")," (",Object(o.b)("inlineCode",{parentName:"p"},"-p"),"), ",Object(o.b)("inlineCode",{parentName:"p"},"--eval")," (",Object(o.b)("inlineCode",{parentName:"p"},"-e"),"), ",Object(o.b)("inlineCode",{parentName:"p"},"--require")," (",Object(o.b)("inlineCode",{parentName:"p"},"-r"),") and ",Object(o.b)("inlineCode",{parentName:"p"},"--interactive")," (",Object(o.b)("inlineCode",{parentName:"p"},"-i"),") similar to the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://nodejs.org/api/cli.html"}),"node.js CLI options"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-h, --help")," Prints the help text"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-v, --version")," Prints the version. ",Object(o.b)("inlineCode",{parentName:"li"},"-vv")," prints node and typescript compiler versions, too"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-s, --script-mode")," Resolve config relative to the directory of the passed script instead of the current directory. Changes default of ",Object(o.b)("inlineCode",{parentName:"li"},"--dir"))),Object(o.b)("h2",{id:"cli-and-programmatic-options"},"CLI and Programmatic Options"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"The name of the environment variable and the option's default value are denoted in parentheses.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-T, --transpile-only")," Use TypeScript's faster ",Object(o.b)("inlineCode",{parentName:"li"},"transpileModule")," (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_TRANSPILE_ONLY"),", default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-H, --compiler-host")," Use TypeScript's compiler host API (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_COMPILER_HOST"),", default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-I, --ignore [pattern]")," Override the path patterns to skip compilation (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_IGNORE"),", default: ",Object(o.b)("inlineCode",{parentName:"li"},"/node_modules/"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-P, --project [path]")," Path to TypeScript JSON project file (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_PROJECT"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-C, --compiler [name]")," Specify a custom TypeScript compiler (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_COMPILER"),", default: ",Object(o.b)("inlineCode",{parentName:"li"},"typescript"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-D, --ignore-diagnostics [code]")," Ignore TypeScript warnings by diagnostic code (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_IGNORE_DIAGNOSTICS"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-O, --compiler-options [opts]")," JSON object to merge with compiler options (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_COMPILER_OPTIONS"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--dir")," Specify working directory for config resolution (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_CWD"),", default: ",Object(o.b)("inlineCode",{parentName:"li"},"process.cwd()"),", or ",Object(o.b)("inlineCode",{parentName:"li"},"dirname(scriptPath)")," if ",Object(o.b)("inlineCode",{parentName:"li"},"--script-mode"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--scope")," Scope compiler to files within ",Object(o.b)("inlineCode",{parentName:"li"},"cwd")," (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_SCOPE"),", default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--files")," Load ",Object(o.b)("inlineCode",{parentName:"li"},"files"),", ",Object(o.b)("inlineCode",{parentName:"li"},"include")," and ",Object(o.b)("inlineCode",{parentName:"li"},"exclude")," from ",Object(o.b)("inlineCode",{parentName:"li"},"tsconfig.json")," on startup (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_FILES"),", default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--pretty")," Use pretty diagnostic formatter (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_PRETTY"),", default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--skip-project")," Skip project config resolution and loading (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_SKIP_PROJECT"),", default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--skip-ignore")," Skip ignore checks (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_SKIP_IGNORE"),", default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--emit")," Emit output files into ",Object(o.b)("inlineCode",{parentName:"li"},".ts-node")," directory (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_EMIT"),", default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--prefer-ts-exts")," Re-order file extensions so that TypeScript imports are preferred (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_PREFER_TS_EXTS"),", default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--log-error")," Logs TypeScript errors to stderr instead of throwing exceptions (",Object(o.b)("inlineCode",{parentName:"li"},"TS_NODE_LOG_ERROR"),", default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")")),Object(o.b)("h2",{id:"programmatic-only-options"},"Programmatic-only Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"transformers")," ",Object(o.b)("inlineCode",{parentName:"li"},"_ts.CustomTransformers | ((p: _ts.Program) => _ts.CustomTransformers)"),": An object with transformers or a factory function that accepts a program and returns a transformers object to pass to TypeScript. Factory function cannot be used with ",Object(o.b)("inlineCode",{parentName:"li"},"transpileOnly")," flag"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"readFile"),": Custom TypeScript-compatible file reading function"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fileExists"),": Custom TypeScript-compatible file existence function")),Object(o.b)("h2",{id:"node-flags"},Object(o.b)("inlineCode",{parentName:"h2"},"node")," flags"),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://nodejs.org/api/cli.html"}),Object(o.b)("inlineCode",{parentName:"a"},"node")," flags")," must be passed directly to ",Object(o.b)("inlineCode",{parentName:"p"},"node"),"; they cannot be passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"ts-node")," binary nor can they be specified in ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")),Object(o.b)("p",null,"We recommend using the ",Object(o.b)("inlineCode",{parentName:"p"},"NODE_OPTIONS"),"](",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://nodejs.org/api/cli.html#cli_node_options_options"}),"https://nodejs.org/api/cli.html#cli_node_options_options"),") environment variable to pass options to ",Object(o.b)("inlineCode",{parentName:"p"},"node"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"NODE_OPTIONS='--trace-deprecation --abort-on-uncaught-exception' ts-node ./index.ts\n")),Object(o.b)("p",null,"Alternatively, you can invoke ",Object(o.b)("inlineCode",{parentName:"p"},"node")," directly and install ",Object(o.b)("inlineCode",{parentName:"p"},"ts-node")," via ",Object(o.b)("inlineCode",{parentName:"p"},"--require"),"/",Object(o.b)("inlineCode",{parentName:"p"},"-r")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"node --trace-deprecation --abort-on-uncaught-exception -r ts-node/register ./index.ts\n")))}b.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=i,O=s["".concat(r,".").concat(m)]||s[m]||d[m]||o;return n?a.a.createElement(O,c(c({ref:t},p),{},{components:n})):a.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);