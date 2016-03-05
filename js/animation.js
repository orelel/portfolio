// <copyright file='animation.js'>
// Copyright (c) 2015 All Right Reserved, http://orel-eliyahu.info/
// </copyright>
// <author>Orel Eliyahu</author>
// <email>orel@engineer.com</email>
// <date>2015-08-23</date>
// <summary>Abstract class for animation based on animation.css</summary>
"use strict";
var ANIMATION = {
	SECTION_SKILLS_BODY_ANIMATION : 'fadeInLeft',
	SECTION_BLOG_BODY_ANIMATION : 'bounceIn',
	SECTION_BLOG_BUTTON_ANIMATION: 'swing',
	SECTION_HEADER_ANIMATION: 'pulse',
	SECTION_CONTACT_BODY_ANIMATION: 'tada',
	
	init: function(){
		
	},
	animateNavbarItem: function(item){
		$(item).removeClass('animated bounce');
		if(!$(item).hasClass('active')){				
			setTimeout(function(){
				$(item).addClass('animated bounce');
			},50);
		}			
	},
	animateWelcome: function(){
		$('#welcome').find('.main_content').removeClass('animated bounceInUp bounceInDown');	
		setTimeout(function(){
			$('#welcome').find('.main_content').addClass('animated bounceInUp');
		},50);
	},
	animateSectionWithRows: function(index,animation){
		var name = SECTION.data[index].name;
		var rows = $('#'+name).find('.row');
		for(var i=0;i<rows.length;i++){
			$(rows[i]).removeClass('animated '+animation);		
			setTimeout(this.createCallbackAnimation(rows[i],animation),i * 500 );
		}
	},
	animateSectionSkillsBody: function(index){
		this.animateSectionWithRows(index,this.SECTION_SKILLS_BODY_ANIMATION);
	},
	animateSectionContactBody: function(index){
		this.animateSectionWithRows(index,this.SECTION_CONTACT_BODY_ANIMATION);
	},
	animateSectionBlogBody: function(index){
		var name = SECTION.data[index].name;
		var rows = $('#'+name).find('.row');
		$(rows[0]).removeClass('animated '+this.SECTION_BLOG_BODY_ANIMATION);		
		setTimeout(this.createCallbackAnimation(rows[0],this.SECTION_BLOG_BODY_ANIMATION),1 * 500 );
		var button = $(rows[1]).find('button');
		$(button).removeClass('animated '+this.SECTION_BLOG_BUTTON_ANIMATION);		
		setTimeout(this.createCallbackAnimation(button,this.SECTION_BLOG_BUTTON_ANIMATION),2 * 500 );
		
	},
	animateSectionHeader: function(index){
		var name = SECTION.data[index].name;
		$('#'+name).find('.header_img').removeClass('animated '+this.SECTION_HEADER_ANIMATION);			
		var self = this;
		setTimeout(function(){
			$('#'+name).find('.header_img').addClass('animated '+self.SECTION_HEADER_ANIMATION);
		},50);
	},
	createCallbackAnimation: function(row,animation){
		var self = this;
		return function(){				
			$(row).addClass('animated '+animation);				
		}
	},		
};
	
