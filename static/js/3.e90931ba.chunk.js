(this.webpackJsonpex_2=this.webpackJsonpex_2||[]).push([[3],{291:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__1eJgg",posts:"MyPosts_posts__KOGaY"}},292:function(t,e,s){t.exports={item:"Post_item__1e5ld"}},293:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2FCTf",imgBlock:"ProfileInfo_imgBlock__1jhl7"}},295:function(t,e,s){"use strict";s.r(e);var c=s(5),n=s(36),o=s(37),i=s(39),a=s(38),r=s(1),u=s(0),j=s.n(u),l=s(16),p=s(97),d=s(41),b=s(291),h=s.n(b),f=s(292),O=s.n(f),m=function(t){return Object(r.jsxs)("div",{className:O.a.item,children:[Object(r.jsx)("img",{src:"https://banner2.cleanpng.com/20180528/ccc/kisspng-computer-icons-user-avatar-woman-avatar-5b0c5b2f6ecaa1.2446433615275364314538.jpg",alt:""}),t.message,Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"like"})," ",t.likesCount]})]})},x=s(91),g=s(128),v=s(88),k=s(33),P=j.a.memo((function(t){var e=Object(d.a)(t.posts).reverse().map((function(t){return Object(r.jsx)(m,{message:t.message,likesCount:t.likesCount})}));return Object(r.jsxs)("div",{className:h.a.postsBlock,children:[Object(r.jsx)("h3",{children:"My posts"}),Object(r.jsx)(S,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(r.jsx)("div",{className:h.a.posts,children:e})]})})),_=Object(v.a)(10),S=function(t){return Object(r.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(x.a,{name:"newPostText",component:k.b,placeholder:"Post massage",validate:[v.b,_]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add post"})})]})};S=Object(g.a)({form:"ProfileAddNewPostForm"})(S);var y=P,w=Object(l.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(p.a)(e))}}}))(y),B=s(293),C=s.n(B),N=s(42),I=s(129),T=function(t){var e=Object(u.useState)(!1),s=Object(I.a)(e,2),c=s[0],n=s[1],o=Object(u.useState)(t.status),i=Object(I.a)(o,2),a=i[0],j=i[1];Object(u.useEffect)((function(){j(t.status)}),[t.status]);return Object(r.jsxs)("div",{children:[!c&&Object(r.jsx)("div",{children:Object(r.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"---"})}),c&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(a)},value:a})})]})},A=function(t){var e=t.profile,s=t.status,c=t.updateStatus;return e?Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"https://image.freepik.com/free-photo/communication-technology-internet-business-global-world-network-telecommunication-earth-cryptocurrency-blockchain-iot-elements-this-image-furnished-by-nasa_102957-60.jpg",alt:""})}),Object(r.jsxs)("div",{className:C.a.descriptionBlock,children:[Object(r.jsx)("img",{src:e.photos.large,alt:"",className:C.a.imgBlock}),Object(r.jsx)(T,{status:s,updateStatus:c}),Object(r.jsx)("div",{children:e.contacts.instagram}),Object(r.jsx)("div",{children:e.fullName})]})]}):Object(r.jsx)(N.a,{})},M=function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)(A,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(r.jsx)(w,{})]})},U=s(11),F=s(9),J=function(t){Object(i.a)(s,t);var e=Object(a.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(r.jsx)(M,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(j.a.Component);e.default=Object(F.d)(Object(l.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:p.d,getStatus:p.c,updateStatus:p.e}),U.f)(J)}}]);
//# sourceMappingURL=3.e90931ba.chunk.js.map