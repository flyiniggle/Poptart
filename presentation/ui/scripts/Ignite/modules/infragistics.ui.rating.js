﻿/*!@license
* Infragistics.Web.ClientUI Rating localization resources 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Rating){$.ig.Rating={};$.extend($.ig.Rating,{locale:{setOptionError:"Runtime changes are not allowed for the following option: "}})}})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\i18n\infragistics.ui.rating-en.js.map
*/

/*!@license
* Infragistics.Web.ClientUI Editors 16.1.20161.2270
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
* jquery-1.9.1.js
* jquery.ui.core.js
* jquery.ui.widget.js
* infragistics.ui.rating-en.js
*
* Example to use:
*	<script type="text/javascript">
*	$(function () {
*		$('#rating1').igRating({ voteCount:3, value:0.5, vertical:true });
*	});
*	</script>
*	<div id="rating1"></div>
*/
(function($){var _aNull=function(v){return v===null||v===undefined||typeof v==="number"&&isNaN(v)};$.widget("ui.igRating",{options:{vertical:false,value:null,valueHover:null,voteCount:5,voteWidth:0,voteHeight:0,swapDirection:false,valueAsPercent:true,focusable:true,precision:"whole",precisionZeroVote:.25,roundedDecimalPlaces:3,theme:null,validatorOptions:null,cssVotes:null},css:{normal:"ui-igrating ui-state-default ui-widget-content",active:"ui-igrating-active",selected:"ui-igrating-selected ui-state-highlight",hover:"ui-igrating-hover ui-state-hover",vote:"ui-igrating-vote ui-icon ui-icon-star",voteSelected:"ui-igrating-voteselected",voteDisabled:"ui-igrating-votedisabled ui-state-disabled",voteHover:"ui-igrating-votehover",voteDisabledSelected:"ui-igrating-votedisabledselected ui-state-disabled"},events:{hoverChange:null,valueChange:null},_create:function(){var inp,cont,elem,sto={fontSize:"1px",width:"100%",height:"100%",position:"relative",overflow:"hidden"},o=this.options,elem0=this.element,me=this,css=this.css,count=this._count(o),v=elem0[0].style,id=o.inputName;me._old={width:v.width,height:v.height,html:elem0[0].innerHTML};if(!id){elem0[0].innerHTML=""}if(o.theme){elem0.addClass(o.theme)}me._swap=o.swapDirection;me._rtl=elem0.css("direction")==="rtl";if(me._rtl){me._swap=!me._swap;elem0.css("direction","ltr")}me._hasHov=0;elem=me._elem=$("<div/>").css(sto).addClass(css.normal).appendTo(elem0).bind(me._evts={mousedown:function(e){me._doEvt(e,1)},mousemove:function(e){me._doEvt(e,2)},mouseleave:function(e){me._doEvt(e,3)}});cont=$("<div/>").css(sto).appendTo(elem);if(o.focusable){v={left:"5px",top:"5px",opacity:.1,position:"absolute",width:"1px",height:"1px",padding:"0px",zIndex:-1,border:"0px",outline:0};me._foc=$('<input type="button"/>').css(v).appendTo(cont).focus(function(evt){if(o.disabled||me._fcs){return}me._fcs=1;if(me._hasHov<2){me._hasHov+=2}if(me._hov){me._doVal(me._valH,1,evt);me._hov.css("visibility","visible")}me._elem.addClass(css.active)}).blur(function(e){if(o.disabled||!me._fcs){return}me._fcs=null;me._hasHov%=2;if(me._hov&&me._hasHov===0){me._hov.css("visibility","hidden")}me._elem.removeClass(css.active);if(me._validator){me._validator._validateInternal(me.element,e,true)}}).keydown(function(evt){var old,arrow=0,k=evt.keyCode,kc=$.ui.keyCode,val=me._valH,swap=me._swap?-1:1,vertical=o.vertical,d=1/me._count(o);if(o.disabled){return}old=val;d/=me._prec(o);if(k===kc.SPACE||k===kc.ENTER){me._doVal(val,false,evt);return}if(k===kc.HOME){val=0}else if(k===kc.END){val=1}else if(k===kc.PAGE_DOWN){val+=d*4}else if(k===kc.PAGE_UP){val-=d*4}else if(k===kc.UP&&vertical){val+=arrow=-d*swap}else if(k===kc.DOWN&&vertical){val+=arrow=d*swap}else if(k===kc.LEFT&&!vertical){val+=arrow=-d*swap}else if(k===kc.RIGHT&&!vertical){val+=arrow=d*swap}if(k>32&&k<41){try{evt.preventDefault();evt.stopPropagation()}catch(ex){}}for(k=0;k<3;k++){if(old!==(val=Math.max(Math.min(val,1),0))&&me._doVal(val,1,evt)&&arrow){val+=arrow}else{break}}})}me._doVotes(o,cont);if(id){inp=$('input[name="'+id+'"]');if(inp.length<=0){inp=$("#"+id)}v=inp[0]?inp[0].value:null;if(v){o.value=me._toNum(v,o)}}me._val=me._toNum(o.value,o);v=o.valueHover;me._valH=_aNull(v)?me._val:me._toNum(v,o);if(!o.valueAsPercent){me._val/=count;me._valH/=count}me.validator();me._set=true;me._doVal(me._val,null,inp?2:inp);me._doVal(me._valH,1);delete me._set},_toNum:function(v,o){if(!v){return 0}o=o._vsFormat;if(typeof v==="string"){v=parseFloat(o?v.replace(o,"_").replace(/[`,\. \':]/g,"").replace("_","."):v)}return isNaN(v)||v<0?0:v},_count:function(o){o=parseInt(o.voteCount,10);return isNaN(o)?5:Math.max(o,1)},_doVotes:function(o,cont){var hov,sel,cssV,height,width,div,span,cssi,val=cont,count=this._count(o),sto={width:"100%",height:"100%"},abs={left:"0px",top:"0px",position:"absolute",overflow:"hidden",border:"none",background:"none"},i=-1,me=this,css=this.css,elem=this._elem,elem0=this.element,touch={touchstart:function(e){e.preventDefault();$(this).trigger("mousedown")}};if(!cont){cont=me._div.parent();me._div.remove();me._hov.remove();me._sel.remove();me._selSwap=me._hovSwap=null}div=me._div=$("<div/>").addClass(css.vote).css(abs).appendTo(cont);if(!o.vertical){div.css("whiteSpace","nowrap")}height=parseInt(o.voteHeight,10);width=parseInt(o.voteWidth,10);if(isNaN(height)||height<2){height=div.css("height");height=!height||height.indexOf("px")<1?16:parseInt(height,10)}if(isNaN(width)||width<2){width=div.css("width");width=!width||width.indexOf("px")<1?16:parseInt(width,10)}div.removeClass(css.vote);sel=me._sel=$("<div/>").addClass(css.selected).css(sto).css(abs).appendTo(cont);if(!o.vertical){sel.css("whiteSpace","nowrap")}hov=me._hov=$("<div/>").addClass(css.hover).css(sto).css(abs).css("visibility","hidden").appendTo(cont);if(!o.vertical){hov.css("whiteSpace","nowrap")}if(me._swap&&!o.vertical){me._hovSwap=hov=$("<div/>").css(sto).appendTo(me._hov);me._selSwap=sel=$("<div/>").css(sto).appendTo(me._sel)}cssV={display:o.vertical?"block":"inline-block",width:width,height:height,textIndent:"0px",overflow:"visible"};while(++i<count){span=$("<span />").addClass(css.vote).css(cssV).appendTo(div).bind(touch);if(o.disabled){span.addClass(css.voteDisabled)}cssi=o.cssVotes?o.cssVotes[i]:null;if(cssi&&cssi[0]){span.addClass(cssi[0])}span[0]._i=i;span=$("<span />").addClass(css.vote).addClass(css.voteSelected).css(cssV).appendTo(sel).bind(touch);if(o.disabled){span.addClass(css.voteDisabledSelected)}if(cssi&&cssi[1]){span.addClass(cssi[1])}span[0]._i=i;if(me._swap&&!me._selSwap){me._selSwap=span}span=$("<span />").addClass(css.vote).addClass(css.voteHover).css(cssV).appendTo(hov).bind(touch);if(cssi&&cssi[2]){span.addClass(cssi[2])}span[0]._i=i;if(me._swap&&!me._hovSwap){me._hovSwap=span}}if(o.vertical){me._size=height;height*=count}else{me._size=width;width*=count}elem.css({height:height+"px",width:width+"px"});try{height+=(i=Math.max(elem.outerHeight()-elem.innerHeight(),0))>10?2:i;width+=(i=Math.max(elem.outerWidth()-elem.innerWidth(),0))>10?2:i}catch(ex){}elem0.css({height:height+"px",width:width+"px"});div.css(sto);if(!val){me.value(me.value())}},validator:function(destroy){var o=this.options.validatorOptions,v=this._validator;if(v&&v.owner===this&&(destroy||!o)){v.destroy();delete this._validator}else if(!v&&!destroy&&o&&this.element.igValidator){this._validator=this.element.igValidator(o).data("igValidator");this._validator.owner=this}else if(v&&!destroy&&o&&this.element.igValidator){this._validator=this.element.igValidator(o).data("igValidator")}return this._validator},validate:function(){return this._validator?this._validator.validate():null},_doEvt:function(evt,type){var val,me=this,o=this.options;if(o.disabled){return}if(type===3){me._hasHov-=me._hasHov%2;if(me._hov&&me._hasHov===0){me._hov[0].style.visibility="hidden"}return}val=me._valFromEvt(evt);if(val<0){return}if(type===1){if(!me._sel){return}val=me._lastHov||val;me._doVal(val,false,evt);me._doVal(val,1,evt);if(me._foc&&document.hasFocus&&!document.hasFocus()){return setTimeout(function(){me.focus()},0)}me.focus()}if(type===2){me._lastHov=val;if(!me._hov){return}if(me._hasHov%2===0){me._hasHov++}me._hov[0].style.visibility="visible";me._doVal(val,1,evt)}evt.preventDefault()},_setOption:function(key,val){var spans,count,css,o=this.options;if(o[key]===val){return this}if(key==="swapDirection"||key==="vertical"||key==="focusable"){throw new Error($.ig.Rating.locale.setOptionError+key)}count=this._count(o);if(key==="disabled"){spans=$("SPAN",this._div);css=this.css.voteDisabled;if(spans.length!==count){return this}if(val){spans.addClass(css)}else{spans.removeClass(css)}spans=$("SPAN",this._sel);css=this.css.voteDisabledSelected;if(spans.length!==count&&this._selSwap){spans=$("SPAN",this._selSwap)}if(spans.length===count){if(val){spans.addClass(css)}else{spans.removeClass(css)}}}if(key==="theme"){if(o.theme){this.element.removeClass(o.theme)}if(val){this.element.addClass(val)}}o[key]=val;if(typeof val==="function"){return this}this._set=true;if(key==="precision"||key==="valueAsPercent"){this._doVal(this._val,false,1);this._doVal(this._valH,1,1)}if(key.indexOf("vote")===0||key==="theme"||key==="cssVotes"){this._doVotes(o)}if(key.indexOf("value")>=0){this._doVal(val,key.length>6,1,1)}if(key==="validatorOptions"){this.validator()}delete this._set;return this},_evtOffset:function(evt,xy){var val,oEvt=evt.originalEvent||evt,offset="offset"+xy;if(_aNull(val=evt[offset])){if(_aNull(val=oEvt[offset])){if(_aNull(val=evt[offset="layer"+xy])){val=oEvt[offset]}}}return val||1},_valFromEvt:function(evt){var plus,val,offset,i,o=this.options,targ=evt?evt.target:null;i=targ&&targ.nodeName==="SPAN"?targ._i:null;if(_aNull(i)){return-1}if(!targ.unselectable){targ.unselectable="on"}offset=this._evtOffset(evt,o.vertical?"Y":"X");plus=this._size;plus*=i;if(plus>offset){offset+=plus}val=offset/this._count(o)/this._size;if(this._swap){val=1-val}return Math.max(Math.min(val,1),0)},_doVal:function(val,hov,evt,v0){var id,inp,v1,count,o=this.options,style=hov?this._hov:this._sel,size=this._size,swap=this._swap?hov?this._hovSwap:this._selSwap:null;if(style){style=style[0];if(style){style=style.style}}if(!style){return}count=this._count(o);if(v0){val=parseFloat(val)}if(isNaN(val)){val=-1}else if(v0&&!o.valueAsPercent){val/=count}if(evt&&evt.type&&val>=0){v0=this._fixVal(hov?this._valH:this._val,1);v1=this._fixVal(val,1);if(v0===v1){return 1}if(!this._trigger(hov?"hoverChange":"valueChange",evt,{value:v1,oldValue:v0})){return}}if(val<0&&hov){val=this._val}val=this._fixVal(val);if(evt){v0=this._round(o.valueAsPercent?val:val*count,o);if(hov){this._valH=val;o.valueHover=v0}else{if(evt!==2){this._val=val;o.value=v0;if(this._validator){this._validator._validateInternal(this.element,evt)}}id=o.inputName;if(id){inp=$('input[name="'+id+'"]');if(inp.length===0){inp=$('<input type="hidden" name="'+id+'" />').appendTo(this.element.parent())}v1=o._vsFormat;inp.val(v1?v0.toString().replace(".",v1):v0)}}}if(!hov&&this._foc){this._foc.val(this._fixVal(val,1))}if(swap){val=1-val}val=Math.floor(val*size*count+.3);val+="px";if(swap){swap=swap[0];if(swap){swap=swap.style}}if(o.vertical){if(swap){style.top=val;swap.marginTop="-"+val}else{style.height=val}}else{if(swap){style.left=val;swap.marginLeft="-"+val}else{style.width=val}}},_prec:function(o){o=this._set?null:o.precision;if(o){o=o.toLowerCase()}return o==="half"?2:o==="whole"?1:4},_fixVal:function(val,full,prec){var fix,count,o=this.options;prec=prec||this._prec(o);count=this._count(o);val=Math.max(Math.min(val,1),0);if(prec<4){fix=count*prec;val*=fix;val=val<o.precisionZeroVote?0:Math.floor(Math.floor(val+.99)+.499*prec)/fix}if(!full){return val}if(!o.valueAsPercent){val*=count;val=prec>1?val:Math.floor(val+.1)}return this._round(val,o)},_round:function(val,o){var pow=1,fix=parseInt(o.roundedDecimalPlaces,10);if(isNaN(fix)||fix<0){return val}fix=Math.min(15,Math.max(fix,this._prec(o)<4?3:o.valueAsPercent?1:0));while(fix-->0){pow*=10}return Math.round(val*pow)/pow},value:function(val){if(typeof val!=="number"){return this._fixVal(this._val,1,4)}this._set=true;this._doVal(val,false,1,1);delete this._set;return this},valueHover:function(val){if(typeof val!=="number"){return this._fixVal(this._valH,1,4)}this._set=true;this._doVal(val,1,1,1);delete this._set;return this},hasFocus:function(){return this._fcs===1},focus:function(){if(this._foc){try{this._foc[0].focus()}catch(ex){}}return this},destroy:function(){var o=this.options,old=this._old,e=this.element;if(!this._elem){return this}this.validator(1);if(this._foc){this._foc.unbind().remove()}this._elem.remove();if(o.theme){e.removeClass(o.theme)}e[0].style.width=old.width;e[0].style.height=old.height;if(!o.inputName){e[0].innerHTML=old.html}if(this._rtl){e.css("direction","rtl")}$.Widget.prototype.destroy.apply(this,arguments);this._elem=this._hov=this._sel=this._selSwap=this._hovSwap=this._foc=this._evts=null;return this}});$.extend($.ui.igRating,{version:"16.1.20161.2270"})})(jQuery);
/*
//@ sourceMappingURL=E:\Work\6\967\src\DEV\jQuery\2016.1\Source\ClientUI\js\modules\infragistics.ui.rating.js.map
*/


