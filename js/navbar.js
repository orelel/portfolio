// <copyright file="navbar.cs">
// Copyright (c) 2015 All Right Reserved, http://orel-eliyahu.info/
// </copyright>
// <author>Orel Eliyahu</author>
// <email>orel@engineer.com</email>
// <date>2015-08-23</date>
// <summary>Abstract class for navigation bar</summary>
"use strict";
var NAVBAR = {
	
	init: function(){
		this.setUpListiners();			
		this.updateNavbar(0);			
	},
	setUpListiners: function(){							
		$(window).scroll(this.updateCurrentItemInNavbar);
		$('.close_navbar').click(function(){
			$('.navbar').hide('slow');
			$('.open_navbar').show('slow');
			
		});
		$('.open_navbar').click(function(){
			$('.navbar').show('slow');				
			$('.open_navbar').hide('slow');
		});
		for(var i=0;i<SECTION.data.length;i++){
			var name = SECTION.data[i].name;				
			$(document.body).on('click','.nav-' + name,SECTION.createCallbackScrollToSection(name));				
		}			
	},				
	close: function(){
		//mobile view
		if($('.close_navbar').css('display') == 'block')
		  $('.close_navbar').click();
	},
	updateCurrentItemInNavbar: function(){
		var currentItem = SECTION.getCurrentSectionIndex();
		if(SECTION.currentSectionIndex != currentItem){
			SECTION.currentSectionIndex = currentItem;
			NAVBAR.updateNavbar(currentItem);
			switch(currentItem){
				//welcome
				case 0:
					ANIMATION.animateWelcome();
					break;
				//skills
				case 1:
					ANIMATION.animateSectionHeader(currentItem);
					ANIMATION.animateSectionSkillsBody(currentItem);
					break;
				//blog
				case 2:
					ANIMATION.animateSectionHeader(currentItem);
					ANIMATION.animateSectionBlogBody(currentItem);
					break;
				//contact
				case 3:
					ANIMATION.animateSectionHeader(currentItem);
					ANIMATION.animateSectionContactBody(currentItem);
					break;
			}
		}
	},
	
	getCurrentSectionIndex: function(){
		var top  = document.body.scrollTop;			
		var sectionIndex = top / SECTION.height;
		var remnant =  top % SECTION.height;
		var offset = remnant > 500 ? 1 : 0;
		return parseInt(sectionIndex) + offset;
	},
	updateNavbar: function(index){
		if(index != null){
			for(var i=0;i<SECTION.data.length;i++){
				SECTION.data[i].active = false;
			}
			SECTION.data[index].active = true;
			this.updateNavbarDOM(index);
		}
	},
	updateNavbarDOM: function(index){
		$('.navbar > ul').empty();			
		for(var i=0;i<SECTION.data.length;i++){				
			var active = SECTION.data[i].active ?  ' active' : '';
			var className = ' class=' + '"' + 'nav-' + SECTION.data[i].name + active + ' noselect' +'"';
			$('.navbar').find('ul').append('<li'+ className + '>' + SECTION.data[i].text + '</li>');
		}			
	}		
	
};	
