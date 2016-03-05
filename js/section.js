// <copyright file="section.cs">
// Copyright (c) 2015 All Right Reserved, http://orel-eliyahu.info/
// </copyright>
// <author>Orel Eliyahu</author>
// <email>orel@engineer.com</email>
// <date>2015-08-23</date>
// <summary>Abstract class for section item</summary>
"use strict";
var SECTION = {
	currentIndex : 0,
	height : 0,
	data : [
		{
			name:'welcome',
			text:'Welcome',
			active:true
		},
		{
			name:'abilities',
			text:'Skills',
			active:false
		},
		{
			name:'blog',
			text:'Blog',
			active:false
		},
		{
			name:'contact',
			text:'Contact',
			active:false
		},
	],
	
	init: function(){
		this.setUpListiners();			
		this.scrollTOSection('welcome');
	},
	
	setUpListiners: function(){			
		$(document).ready(this.setSectionsHeight);
		$(window).resize(this.setSectionsHeight);	
		$('button').click(this.go2blog);
	},	
	
	go2blog: function(){
		window.location.href = '/drupal';
	},
	
	createCallbackScrollToSection: function (name){
		var self = this;
		return function(){
			ANIMATION.animateNavbarItem($('.nav-'+name));
			setTimeout(function(){
				self.scrollTOSection(name);
			},500);
			
		}
	},	
	
	setSectionsHeight: function(){
		SECTION.height = $(window).height();
			
		//Landscape mode
		if(window.innerHeight < window.innerWidth){				
			if(window.innerHeight < 300)
				SECTION.height *= 1.9;
			else if(window.innerHeight < 400)
				SECTION.height *= 1.7;
			else if(window.innerHeight < 500)
				SECTION.height *= 1.5;
			else if(window.innerHeight < 600)
				SECTION.height *= 1.3;
			else if(window.innerHeight < 700)
				SECTION.height *= 1.1;
			}	
		$('section').height(SECTION.height);
		$('li.section_header_text').css('line-height',SECTION.height/10 + 'px');

	},		
	
	getCurrentSectionIndex: function(){
		var top  = document.body.scrollTop;			
		var sectionIndex = top / this.height;
		var remnant =  top % this.height;
		var offset = remnant > 500 ? 1 : 0;
		return parseInt(sectionIndex) + offset;
	},
	
	scrollTOSection: function(id){
	  $('html, body').animate({
			scrollTop: $("#"+id).offset().top
	  }, 1000);
	  NAVBAR.close();
	}
	
};

