(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[19],{408:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var l=t(8),c=t(9),i=t(12),s=t(11),n=t(0),m=t.n(n),r=t(16),o=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"bi-coin-value"},this.getFormattedValue()," ",r.a.blockchain.coinName.toUpperCase())}},{key:"getFormattedValue",value:function(){var e=this.props.value/1e9;return e<1&&0!==e?e.toFixed(9).split("").reduceRight((function(e,a){return"0"===a&&0===e.length||e.push(a),e}),[]).reverse().join(""):e.toString()}}]),t}(m.a.PureComponent)},823:function(e,a,t){},824:function(e,a,t){},825:function(e,a,t){},826:function(e,a,t){},874:function(e,a,t){"use strict";t.r(a);var l=t(1),c=t(8),i=t(9),s=t(12),n=t(11),m=t(0),r=t.n(m),o=t(107),_=t.n(o),b=t(29),u=t(30),d=t(20),v=t(16),p=t(31),E=t(170),y=(t(823),t(408)),N=(t(824),function(e){Object(s.a)(t,e);var a=Object(n.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bi-block-summary"},r.a.createElement("div",{className:"bi-block-summary__header"},r.a.createElement(b.a,{id:"components.block-summary.title"})),r.a.createElement("div",{className:"bi-block-summary__body bi-table"},r.a.createElement("div",{className:"bi-block-summary__row bi-table__row"},r.a.createElement("div",{className:"bi-block-summary__cell bi-block-summary__cell--header bi-table__cell"},r.a.createElement(b.a,{id:"components.block-summary.total"})),r.a.createElement("div",{className:"bi-block-summary__cell bi-block-summary__cell--value bi-table__cell u-word-wrap"},this.props.summary.total),r.a.createElement("div",{className:"bi-block-summary__cell bi-block-summary__cell--actions bi-table__cell"})),r.a.createElement("div",{className:"bi-block-summary__row bi-table__row"},r.a.createElement("div",{className:"bi-block-summary__cell bi-block-summary__cell--header bi-table__cell"},r.a.createElement(b.a,{id:"components.block-summary.averageMiningTime"})),r.a.createElement("div",{className:"bi-block-summary__cell bi-block-summary__cell--value bi-table__cell u-word-wrap"},(this.props.summary.averageMiningTime/1e3/60).toFixed(2)," ",r.a.createElement(b.a,{id:"components.block-summary.minutes"})),r.a.createElement("div",{className:"bi-block-summary__cell bi-block-summary__cell--actions bi-table__cell"})),r.a.createElement("div",{className:"bi-block-summary__row bi-table__row"},r.a.createElement("div",{className:"bi-block-summary__cell bi-block-summary__cell--header bi-table__cell"},r.a.createElement(b.a,{id:"components.block-summary.totalCoins"})),r.a.createElement("div",{className:"bi-block-summary__cell bi-block-summary__cell--value bi-table__cell u-word-wrap"},r.a.createElement(y.a,{value:this.props.summary.totalCoins})),r.a.createElement("div",{className:"bi-block-summary__cell bi-block-summary__cell--actions bi-table__cell"}))))}}]),t}(r.a.PureComponent)),h=t(36),g=(t(825),t(109)),w=function(e){Object(s.a)(t,e);var a=Object(n.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bi-mining-cost"},r.a.createElement("div",{className:"bi-mining-cost__header"},r.a.createElement(b.a,{id:"components.mining-cost.title"})),r.a.createElement("div",{className:"bi-mining-cost__body bi-table"},r.a.createElement("div",{className:"bi-mining-cost__row bi-table__row"},r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--header bi-table__cell"},r.a.createElement(b.a,{id:"components.mining-cost.totalMinersRevenue"})),r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--value bi-table__cell u-word-wrap"},r.a.createElement(y.a,{value:this.props.summary.totalMinersRevenue})),r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--actions bi-table__cell"})),r.a.createElement("div",{className:"bi-mining-cost__row bi-table__row"},r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--header bi-table__cell"},r.a.createElement(b.a,{id:"components.mining-cost.percentEarnedTransactionsFees"})),r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--value bi-table__cell u-word-wrap"},this.props.summary.percentEarnedTransactionsFees,"%"),r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--actions bi-table__cell"})),r.a.createElement("div",{className:"bi-mining-cost__row bi-table__row"},r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--header bi-table__cell"},r.a.createElement(b.a,{id:"components.mining-cost.percentTransactionVolume"})),r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--value bi-table__cell u-word-wrap"},this.props.summary.percentTransactionVolume,"%"),r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--actions bi-table__cell"})),r.a.createElement("div",{className:"bi-mining-cost__row bi-table__row"},r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--header bi-table__cell"},r.a.createElement(b.a,{id:"components.mining-cost.costPerTransaction"})),r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--value bi-table__cell u-word-wrap"},r.a.createElement(y.a,{value:this.props.summary.costPerTransaction})),r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--actions bi-table__cell"})),r.a.createElement("div",{className:"bi-mining-cost__row bi-table__row"},r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--header bi-table__cell"},r.a.createElement(b.a,{id:"components.mining-cost.difficulty"})),r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--value bi-table__cell u-word-wrap"},this.props.summary.difficulty),r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--display bi-mining-cost__cell--actions  bi-table__cell"},r.a.createElement(h.Link,{to:"/charts/difficulty"},r.a.createElement(b.a,{id:"common.charts.view"})))),r.a.createElement("div",{className:"bi-mining-cost__row bi-table__row"},r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--header bi-table__cell"},r.a.createElement(b.a,{id:"components.mining-cost.hashRate"})),r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--value bi-table__cell u-word-wrap"},Object(g.a)("hashRate",this.props.summary.hashRate)),r.a.createElement("div",{className:"bi-mining-cost__cell bi-mining-cost__cell--display  bi-mining-cost__cell--actions bi-table__cell"},r.a.createElement(h.Link,{to:"/charts/hash-rate"},r.a.createElement(b.a,{id:"common.charts.view"}))))))}}]),t}(r.a.PureComponent),k=(t(826),function(e){Object(s.a)(t,e);var a=Object(n.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bi-transactions-summary"},r.a.createElement("div",{className:"bi-transactions-summary__header"},r.a.createElement(b.a,{id:"components.transactions-summary.title"})),r.a.createElement("div",{className:"bi-transactions-summary__body bi-table"},r.a.createElement("div",{className:"bi-transactions-summary__row bi-table__row"},r.a.createElement("div",{className:"bi-transactions-summary__cell bi-transactions-summary__cell--header bi-table__cell"},r.a.createElement(b.a,{id:"components.transactions-summary.total"})),r.a.createElement("div",{className:"bi-transactions-summary__cell bi-transactions-summary__cell--value bi-table__cell u-word-wrap"},this.props.summary.total),r.a.createElement("div",{className:"bi-transactions-summary__cell bi-transactions-summary__cell--actions bi-table__cell"})),r.a.createElement("div",{className:"bi-transactions-summary__row bi-table__row"},r.a.createElement("div",{className:"bi-transactions-summary__cell bi-transactions-summary__cell--header bi-table__cell"},r.a.createElement(b.a,{id:"components.transactions-summary.totalFee"})),r.a.createElement("div",{className:"bi-transactions-summary__cell bi-transactions-summary__cell--value bi-table__cell u-word-wrap"},r.a.createElement(y.a,{value:this.props.summary.totalFee}))),r.a.createElement("div",{className:"bi-transactions-summary__row bi-table__row"},r.a.createElement("div",{className:"bi-transactions-summary__cell bi-transactions-summary__cell--header bi-table__cell"},r.a.createElement(b.a,{id:"components.transactions-summary.totalOutput"})),r.a.createElement("div",{className:"bi-transactions-summary__cell bi-transactions-summary__cell--value bi-table__cell u-word-wrap"},r.a.createElement(y.a,{value:this.props.summary.totalOutput})),r.a.createElement("div",{className:"bi-transactions-summary__cell bi-transactions-summary__cell--actions bi-table__cell"}))))}}]),t}(r.a.PureComponent)),f=function(e){Object(s.a)(t,e);var a=Object(n.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.preloaded?this.props.clearPreloadedState():this.props.getStats()}},{key:"render",value:function(){return r.a.createElement("div",{className:"bi-stats"},r.a.createElement(b.a,{id:"common.pages.stats.title"},(function(e){return r.a.createElement(_.a,null,r.a.createElement("title",null,e))})),r.a.createElement("div",{className:"bi-stats__header"},r.a.createElement("div",{className:"bi-stats__title"},r.a.createElement(b.a,{id:"components.stats.title",values:{coinName:v.a.blockchain.coinName.toUpperCase()}})),r.a.createElement("div",{className:"bi-stats__subtitle"},r.a.createElement(b.a,{id:"components.stats.subtitle"}))),this.props.stats?this.renderBody():null)}},{key:"renderBody",value:function(){return r.a.createElement("div",{className:"bi-stats__body"},r.a.createElement("div",{className:"bi-stats__line"},r.a.createElement("div",{className:"bi-stats__block-summary"},r.a.createElement(N,{summary:this.props.stats.blockSummary}))),r.a.createElement("div",{className:"bi-stats__line"},r.a.createElement("div",{className:"bi-stats__block-summary"},r.a.createElement(k,{summary:this.props.stats.transactionsSummary}))),r.a.createElement("div",{className:"bi-stats__line"},r.a.createElement("div",{className:"bi-stats__block-summary"},r.a.createElement(w,{summary:this.props.stats.miningCost}))))}}]),t}(r.a.PureComponent);var O=Object(u.b)((function(e){return e.stats}),(function(e){return Object(d.bindActionCreators)(Object(l.a)(Object(l.a)({},E.a),p.a),e)}))(f);a.default=O}}]);
//# sourceMappingURL=19.2c7cd98a.chunk.js.map