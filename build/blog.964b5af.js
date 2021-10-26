webpackJsonp([2],{1:function(e,t){e.exports=React},2:function(e,t){e.exports=ReactDOM},399:function(e,t,n){e.exports=n(400)},400:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(2),d=r(s),h=n(11),p=r(h),f=n(12),g=r(f),m=n(401),b=r(m),y=n(403),S=r(y),v=n(16),_=r(v),k=n(405),w=r(k),D=n(5);n(406);var E=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e=this.getLanguage(),t=w.default[e],n=t.list;return c.default.createElement("div",{className:"blog-list-page"},c.default.createElement(g.default,{type:"dark",currentKey:"blog",logo:"/img/hlogo_white.svg",language:e,onLanguageChange:this.onLanguageChange}),c.default.createElement("section",{className:"blog-container"},c.default.createElement("div",{className:"col col-18 left-part"},c.default.createElement(b.default,{pageSize:5},n.map(function(e,t){return c.default.createElement(S.default,{key:t,dataSource:e})}))),c.default.createElement("div",{className:"col col-6 right-part"},c.default.createElement("h4",null,t.postsTitle),c.default.createElement("ul",null,n.map(function(e,t){return c.default.createElement("li",{key:t},c.default.createElement("a",{href:(0,D.getLink)(e.link),target:e.target||"_self"},c.default.createElement("span",null,e.dateStr,"  "),c.default.createElement("span",null,e.title)))})))),c.default.createElement(_.default,{logo:"/img/ds_gray.svg",language:e}))}}]),t}(p.default);document.getElementById("root")&&d.default.render(c.default.createElement(E,null),document.getElementById("root")),t.default=E},401:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),d=n(3),h=r(d),p=n(17),f=n(7),g=r(f),m=n(5);n(402);var b={pageSize:h.default.number},y={pageSize:5},S=(0,p.autobind)(i=function(e){function t(e){l(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.container=null,n.state={page:0,pageWidth:0},n}return o(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this,t=this.container.getBoundingClientRect().width;this.setState({pageWidth:t}),this.throttleAdjust=(0,m.throttle)(function(){e.setState({pageWidth:e.container.getBoundingClientRect().width})},200),window.addEventListener("resize",this.throttleAdjust)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.throttleAdjust)}},{key:"changePage",value:function(e){this.setState({page:e})}},{key:"renderSliderList",value:function(){for(var e=this.props,t=e.children,n=e.pageSize,r=this.state,l=r.page,a=r.pageWidth,o=[],i=s.default.Children.count(t),u=Math.ceil(i/n),c=0;c<u;c++)o.push(Array.from(t).slice(c*n,(c+1)*n));return s.default.createElement("div",{className:"slider-list",style:{transform:"translateX(-"+l*a+"px)",transition:"transform 500ms ease",width:u*a}},o.map(function(e,t){return s.default.createElement("div",{className:"slider-page",style:{width:a},key:t},e.map(function(e,t){return s.default.createElement("div",{className:"slider-item",key:t},e)}))}))}},{key:"renderControl",value:function(){var e=this.props,t=e.children,n=e.pageSize,r=this.state.page,l=s.default.Children.count(t),a=Math.ceil(l/n);return s.default.createElement("div",{className:"slider-control"},s.default.createElement("img",{className:(0,g.default)({"slider-control-prev":!0,"slider-control-prev-hidden":0===r}),src:(0,m.getLink)("/img/system/prev.png"),onClick:this.changePage.bind(this,r-1)}),s.default.createElement("img",{className:(0,g.default)({"slider-control-next":!0,"slider-control-next-hidden":r===a-1}),src:(0,m.getLink)("/img/system/next.png"),onClick:this.changePage.bind(this,r+1)}))}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"page-slider",ref:function(t){e.container=t}},this.renderSliderList(),this.renderControl())}}]),t}(s.default.Component))||i;S.propTypes=b,S.defaultProps=y,t.default=S},402:function(e,t){},403:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=function(e){return e&&e.__esModule?e:{default:e}}(u),s=n(17),d=n(5);n(404);var h=(0,s.autobind)(o=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isHovered:!1},n}return a(t,e),i(t,[{key:"onMouseOver",value:function(){this.setState({isHovered:!0})}},{key:"onMouseOut",value:function(){this.setState({isHovered:!1})}},{key:"render",value:function(){var e=this.props.dataSource,t=e.link,n=e.target,r=e.title,l=e.author,a=e.companyIcon,o=e.companyIconHover,i=e.dateStr,u=e.desc,s=this.state.isHovered;return c.default.createElement("a",{href:(0,d.getLink)(t),target:n||"_self",className:"blog-item",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut},c.default.createElement("div",{className:"title"},c.default.createElement("img",{src:s?(0,d.getLink)("/img/system/docs_hover.png"):(0,d.getLink)("/img/system/docs_normal.png")}),c.default.createElement("span",null,r)),c.default.createElement("div",{className:"brief-info"},c.default.createElement("span",{className:"author"},l),a?c.default.createElement("img",{src:s?(0,d.getLink)(o):(0,d.getLink)(a)}):null,c.default.createElement("span",{className:"date"},i)),c.default.createElement("p",null,u))}}]),t}(c.default.Component))||o;t.default=h},404:function(e,t){},405:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"en-us":{barText:"Blog",postsTitle:"All posts",list:[{title:"DolphinScheduler Vulnerability Explanation",author:"Debar Chen",dateStr:"2021-10-26",desc:"DolphinScheduler Vulnerability Explanation",link:"/en-us/blog/DolphinScheduler Vulnerability Explanation.html"},{title:"Introducing Apache DolphinScheduler 1.3.9, StandaloneServer is Available!",author:"Debar Chen",dateStr:"2021-10-22",desc:"Introducing Apache DolphinScheduler 1.3.9, StandaloneServer is Available!",link:"/en-us/blog/Introducing Apache DolphinScheduler 1.3.9.html"},{title:"Introducing Apache DolphinScheduler 1.3.9, StandaloneServer is Available!",author:"Debar Chen",dateStr:"2021-10-22",desc:"Apache Dolphin Scheduler(Incubating) will organize a meetup in Shanghai  2019.10.26. Welcome to register.",link:"/en-us/blog/Introducing Apache DolphinScheduler 1.3.9.html"},{title:"Why did we split the big json of DAG in workflow definition?",author:"JinyLeeChina",translator:"QuakeWang",dateStr:"2021-06-03",desc:"The task and relationship in the workflow of Dolphinscheduler is saved as the process_definition_json field that saves the process_definiton table in the database in a large JSON. If a workflow is large, this JSON field has become a result. Very big, you need to analyze JSON when using it, it costs very much, and the task cannot be reused, so the community plan launches the JSON split project.",link:"/en-us/blog/Json_Split.html"},{title:" Big Data Workflow Task Scheduling - Directed Acyclic Graph (DAG) for Topological Sorting",author:"LidongDai",translator:"QuakeWang",dateStr:"2021-05-06",desc:"DAG: Full name Directed Acyclic Graph，referred to as DAG。Tasks in the workflow are assembled in the form of directed acyclic graphs, which are topologically traversed from nodes with zero indegrees of ingress until there are no successor nodes.",link:"/en-us/blog/DAG.html"},{title:"FAQ of Apache DolphinScheduler",author:"LidongDai",dateStr:"2021-03-20",desc:"Apache Dolphin Scheduler(Incubating) will organize a meetup in Shanghai  2019.10.26. Welcome to register.",link:"/en-us/blog/FAQ.html"},{title:"Apache Dolphin Scheduler(Incubating) Meetup 2019.10 Shanghai",author:"William",dateStr:"2019-9-27",desc:"Apache Dolphin Scheduler(Incubating) will organize a meetup in Shanghai  2019.10.26. Welcome to register.",link:"/en-us/blog/meetup_2019_10_26.html"}]},"zh-cn":{barText:"博客",postsTitle:"所有文章",list:[{title:"DolphinScheduler漏洞情况说明",author:"徐玮毅",dateStr:"2021-10-26",desc:"DolphinScheduler漏洞情况说明",link:"/zh-cn/blog/DolphinScheduler漏洞情况说明.html"},{title:"Apache DolphinScheduler 架构演进及开源经验分享",author:"徐玮毅",dateStr:"2021-07-18",desc:"DolphinScheduler 1.2.x/1.3.x/2.0架构演进及开源经验分享（阮文俊）",link:"/zh-cn/blog/DS_architecture_evolution.html"},{title:"伴鱼数据质量平台实践",author:"伴鱼技术团队",editor:"太空人",dateStr:"2021-07-06",desc:"伴鱼基础架构数据团队在应对该类问题时推出的平台化产品 - 数据质量中心（Data Quality Center, DQC）的设计与实现",link:"/zh-cn/blog/ipalfish_tech_platform.html"},{title:"DolphinScheduler在Windows环境启动源码",author:"寇文皓",dateStr:"2021-07-05",desc:"在Windows环境下启动DolphinScheduler的代码进行开发调试",link:"/zh-cn/blog/DS_run_in_windows.html"},{title:"DolphinScheduler 核心之 DAG 大 JSON 拆分详解",author:"进勇",editor:"小P",dateStr:"2021-05-29",desc:"DolphinScheduler 核心之 DAG 大 JSON 拆分始末",link:"/zh-cn/blog/dolphinscheduler_json.html"},{title:"为什么要把 DolphinScheduler 工作流定义中保存任务及关系的大 json 给拆了?",author:"进勇",editor:"王福政",dateStr:"2021-05-25",desc:"当前 DolphinScheduler 的工作流中的任务及关系保存时是以大 json 的方式保存到数据库中 process_definiton 表的 process_definition_json 字段，如果某个工作流很大比如有 1000 个任务，这个 json 字段也就随之变得非常大，在使用时需要解析 json，非常耗费性能，且任务没法重用，故社区计划启动 json 拆分项目。",link:"/zh-cn/blog/json_split.html"},{title:"大数据工作流任务调度--有向无环图(DAG)之拓扑排序",author:"代立冬",translator:"王福政",dateStr:"2021-05-19",desc:"DAG：全称是Directed Acyclic Graph，简称DAG。工作流中的任务以有向无环图的形式组合，从拓扑上看，这些节点的入口度为零，直到没有后续节点为止。",link:"/zh-cn/blog/DAG.html"},{title:"Apache Dolphinscheduler 1.3.x 系列配置文件指南",author:"张伯毅",dateStr:"2021-01-05",target:"_blank",desc:"本文档为dolphinscheduler配置文件指南,针对版本为 dolphinscheduler-1.3.x 版本",link:"https://mp.weixin.qq.com/s/gJUsGBHuMxw79VGH2ziZtg"},{title:"DolphinScheduler & K8s 在优路科技的实践！",author:"李文禾",dateStr:"2020-11-12",target:"_blank",desc:"本文通过介绍DolphinScheduler on Kubernetes 在优路科技的实践，阐述了DolphinScheduler如何在云原生时代，更好地助力企业实现高效的数据调度解决方案",link:"https://mp.weixin.qq.com/s/roNuuZ1AWySam5WwNQHwhg"},{title:"Apache DolphinScheduler 需要的sudo，还可以这么玩，长见识了！",author:"海豚调度",dateStr:"2020-12-16",target:"_blank",desc:"这里推荐一下社区贡献者 import 的实践文章，写的非常赞，sudo 也是非常的痛点，也寻求一种更好的实现方式来实现多租户",link:"https://mp.weixin.qq.com/s/5rRWMoT0DLMcOdDl-mrsRQ"},{title:"Apache Dolphin Scheduler(Incubating)将于2019.10在上海举行见面会",author:"郭炜",dateStr:"2019-9-27",desc:"Apache Dolphin Scheduler(Incubating) 将于2019年10月26日在上海组织一次会议，欢迎踊跃报名。 ",link:"/zh-cn/blog/meetup_2019_10_26.html"}]}}},406:function(e,t){}},[399]);