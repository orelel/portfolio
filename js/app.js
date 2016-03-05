// <copyright file="app.cs">
// Copyright (c) 2015 All Right Reserved, http://orel-eliyahu.info/
// </copyright>
// <author>Orel Eliyahu</author>
// <email>orel@engineer.com</email>
// <date>2015-08-23</date>
// <summary>Abstract class for main application</summary>
(function () {
   "use strict";
	var APP = {
		
		init: function(){
			NAVBAR.init();
			SECTION.init();			
			ANIMATION.init();
		}
	};
	//initialize everything
	APP.init();

})();