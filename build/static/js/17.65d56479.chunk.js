(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[17],{843:function(e,a,t){},844:function(e,a,t){},845:function(e,a,t){},846:function(e,a,t){},847:function(e,a,t){},873:function(e,a,t){"use strict";t.r(a),t.d(a,"ApiComponent",(function(){return j}));var n=t(8),r=t(9),s=t(12),i=t(11),p=t(0),c=t.n(p),l=t(107),m=t.n(l),o=t(29),u=t(30),b=t(20),h=t(16),d=t(129),_=(t(843),t(43)),v=(t(844),function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"bi-api-type"},c.a.createElement("span",{className:"bi-api-type__type"},this.props.schema.type),this.props.schema.enum&&c.a.createElement("div",{className:"bi-api-type__enum"},this.props.schema.enum.join(", ")))}}]),t}(c.a.PureComponent)),E=(t(845),function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"bi-api-params"},c.a.createElement("div",{className:"bi-api-params__header"},"Parameters"),c.a.createElement("div",{className:"bi-table"},this.props.params.map((function(e){return c.a.createElement("div",{className:"bi-api-params__param bi-table__row",key:e.name},c.a.createElement("div",{className:"bi-api-params__name bi-table__cell"},e.name,e.required&&c.a.createElement("span",{className:"bi-api-params__required"},"*"),c.a.createElement("span",{className:"bi-api-params__in"},e.in)),c.a.createElement("div",{className:"bi-table__cell"},e.description||"Parameter description is empty"),c.a.createElement("div",{className:"bi-table__cell"},c.a.createElement(v,{schema:e.schema})),c.a.createElement("div",{className:"bi-table__cell"},e.schema.description||"Schema description is empty"))}))))}}]),t}(c.a.PureComponent)),f=(t(846),function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"bi-api-response"},c.a.createElement("div",{className:"bi-api-response__header"},"Response ",this.props.code),c.a.createElement("div",{className:"bi-api-response__body"},Object.keys(this.props.response.content).map((function(a){return c.a.createElement("pre",{key:a,className:"bi-api-response__example g-scroll-y"},JSON.stringify(e.getExample(e.props.response.content[a].schema),null,2))}))))}},{key:"getExample",value:function(e){var a,t=this;switch(e.type){case"object":if(a={},!e.properties)break;Object.keys(e.properties).forEach((function(n){a[n]=t.getExample(e.properties[n])}));break;case"array":(a=[]).push(this.getExample(e.items));break;case"string":a=e.example||e.type||"";break;case"integer":case"float":case"number":a=e.example||0;break;default:a=e.type}return a}}]),t}(c.a.PureComponent)),y=(t(847),t(14)),N=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=a.call.apply(a,[this].concat(s))).state={isOpen:!1},e.toggleMenu=function(){return e.setState({isOpen:!e.state.isOpen})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"bi-api-path"},Object.keys(this.props.paths).map((function(a,t){return c.a.createElement("div",{className:"bi-api-path__item",key:t},c.a.createElement("div",{className:"bi-api-path__item-header",onClick:function(){return e.toggleMenu()}},c.a.createElement("span",{className:"bi-api-path__type"},a),c.a.createElement("span",{className:"bi-api-path__pathname"},e.props.pathName),c.a.createElement("span",{className:"bi-api-path__summary"},e.props.paths[a].operationId),c.a.createElement("div",{className:"bi-api-path__icon ".concat(e.state.isOpen?"":"bi-api-path__icon--open")},c.a.createElement(y.a,null))),e.state.isOpen&&c.a.createElement("div",{className:"bi-api-path__item-body"},e.props.paths[a].parameters&&c.a.createElement("div",{className:"bi-api-path__params"},c.a.createElement(E,{params:Object(_.a)(e.props.paths[a].parameters||[])})),Object.keys(e.props.paths[a].responses).map((function(t,n){return c.a.createElement(f,{key:n,code:t,response:e.props.paths[a].responses[t]})}))))})))}}]),t}(c.a.PureComponent),O=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.data||this.props.getApi()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"bi-api"},c.a.createElement(o.a,{id:"common.pages.api.title"},(function(e){return c.a.createElement(m.a,null,c.a.createElement("title",null,e))})),this.props.data&&c.a.createElement("div",{className:"bi-api__header"},c.a.createElement("div",{className:"bi-api__title"},h.a.blockchain.coinName," Explorer"," ",this.props.data&&this.props.data.info.version),h.a.apiUrl),this.props.data&&c.a.createElement("div",{className:"bi-api__body"},Object.keys(this.props.data.paths).map((function(a){return c.a.createElement(N,{key:a,pathName:a,paths:e.props.data.paths[a]})}))))}}]),t}(c.a.PureComponent);var j=Object(u.b)((function(e){return e.api}),(function(e){return Object(b.bindActionCreators)(d.a,e)}))(O);a.default=j}}]);
//# sourceMappingURL=17.65d56479.chunk.js.map