var app = angular.module('alphaPhotographyApp', ['thatisuday.ng-image-gallery']);
app.config(function (ngImageGalleryOptsProvider) {
    ngImageGalleryOptsProvider.setOpts({
        thumbnails: true,
        //inline      :   true,
        bubbles: true,
        imgBubbles: true,
        bgClose: false
    });
});
app.controller('projectsController', function($scope, $location) {

	var getId = function()
	{
		var url = window.location.search.substring(1);
		var params = url.split('=');

		if(params[0] == 'id')
		{
			return params[1];
		}
		return 1;
	};

	
	var projectid = getId();

	$scope.projectUrl = 'http://alphaphotography.me/projects.html?id=' + projectid;

	// $scope.otherProjects = [
	// 	{id:1, title:'Avengers', image:'images/projects/project1.jpg', shortDescription:'Toys come to life'},
	// 	{id:2, title:'Splash', image:'images/projects/project2.jpg', shortDescription:'Studio water splashes'},
	// 	{id:3, title:'Yoga for life', image:'images/projects/project3.jpg', shortDescription:'A yoga teacher in action'},
	// 	{id:4, title:'Adarsh', image:'images/projects/project4.jpg', shortDescription:'I see me seing me!'},
	// 	{id:5, title:'Salsa', image:'images/projects/project5.jpg', shortDescription:'string Dance = "Life";'},
	// 	{ id: 6, title: 'Broken Angel', image: 'images/projects/project6.jpg', shortDescription: "I'm so lonely!!" },
	// 	{ id: 7, title: 'Ladakh', image: 'images/projects/project7.jpg', shortDescription: 'Heaven on Earth!' },
    // 	{ id: 8, title: 'Christmas', image: 'images/projects/project8.jpg', shortDescription: "A 'Marvel'ous Christmas!" }
	// ];

	$scope.otherProjects = [
		{id:1, title:'Fashion',image:'images/projects/project1.jpg', shortDescription:'Flaunt your mojo'},
		{id:2, title:'Celebrities',image:'images/projects/project2.jpg', shortDescription:'Some of the celebrities I have worked with'},
		{id:3, title:'Kids',image:'images/projects/project3.jpg', shortDescription:'Joy of life'},
		{id:4, title:'Couple',image:'images/projects/project4.jpg', shortDescription:'Toggether is better'},
		{id:5, title:'Travel',image:'images/projects/project5.jpg', shortDescription:'I see me seing me!'},
		{id:6, title:'Food',image:'images/projects/project6.jpg', shortDescription:"Eat to live. Live to Eat"},
		// {id:7, title:'Fine Art',image:'images/projects/project7.jpg', shortDescription:'Art is a way of Life'}    	
    ];



	$scope.projects = [
		{ id:1, title:'Fashion', imageCount:34, description:'I bought these little avenger toys from US. These pictures are from my weekend free time.'
		},
		{ id:2, title:'Celebrities', imageCount:18, description:'Always wanted to capture a perfect droplet. These pictures require a flash with hi-speed sync ability and a lot of patience to get the right shot.'
		},
		{ id:3, title:'Kids', imageCount:15, description:'Always admired people with special talents. I met Lydia through a common friend in Seattle. She was a Yoga teacher and watching her do yoga poses makes me think... what is she made of?'
		},
		{ id:4, title:'Couple', imageCount:8, description:'It was my first chance to work with Salsa dancers. It was freezing cold in the month of december. Adarsh and Lydia are did a fantastic job posing'
		},
		{ id:5, title:'Travel', imageCount:18, description:'My ex-colleague and friend. Before going to Seattle second time, I made a deal with him. He would take me to some good photo spots in the city and I would get some good pictures for him. I got to see a lot of new spots'
		},
		{ id:6, title:'Food', imageCount:10, description:'Portraying a theme of a girl who is broken. It was the first shoot of Prachi in hyderabad and my first shoot with a model. She went on to become a successful model and an actor later on.'
		},
        // { id: 7, title: 'Fine Art', imageCount: 11, description: 'Portraying a theme of a girl who is broken. It was the first shoot of Prachi in hyderabad and my first shoot with a model. She went on to become a successful model and an actor later on.'
        // }
	];

	// $scope.projects = [
	// 	{ id:1, title:'Avengers', imageCount:4, description:'I bought these little avenger toys from US. These pictures are from my weekend free time.'
	// 	},
	// 	{ id:2, title:'Splash', imageCount:6, description:'Always wanted to capture a perfect droplet. These pictures require a flash with hi-speed sync ability and a lot of patience to get the right shot.'
	// 	},
	// 	{ id:3, title:'Yoga for life', imageCount:9, description:'Always admired people with special talents. I met Lydia through a common friend in Seattle. She was a Yoga teacher and watching her do yoga poses makes me think... what is she made of?'
	// 	},
	// 	{ id:4, title:'Adarsh', imageCount:6, description:'My ex-colleague and friend. Before going to Seattle second time, I made a deal with him. He would take me to some good photo spots in the city and I would get some good pictures for him. I got to see a lot of new spots'
	// 	},
	// 	{ id:5, title:'Salsa', imageCount:6, description:'It was my first chance to work with Salsa dancers. It was freezing cold in the month of december. Adarsh and Lydia are did a fantastic job posing'
	// 	},
	// 	{ id:6, title:'Broken Angel', imageCount:6, description:'Portraying a theme of a girl who is broken. It was the first shoot of Prachi in hyderabad and my first shoot with a model. She went on to become a successful model and an actor later on.'
	// 	},
    //     { id: 7, title: 'Ladakh', imageCount: 11, description: 'Portraying a theme of a girl who is broken. It was the first shoot of Prachi in hyderabad and my first shoot with a model. She went on to become a successful model and an actor later on.'
    //     },
	//     { id: 8, title: 'Christmas', imageCount: 6, description: 'Portraying a theme of a girl who is broken. It was the first shoot of Prachi in hyderabad and my first shoot with a model. She went on to become a successful model and an actor later on.'
    //     }
	// ];

	$scope.title = $scope.projects[projectid - 1].title;
	$scope.description = $scope.projects[projectid - 1].description;
	$scope.imageCount = $scope.projects[projectid - 1].imageCount;
	$scope.projectid = projectid;
	$scope.getImageCount = function(num) {
    	return new Array(num);   
	};

	$scope.projectFilter = function (item) { 
    	return item.id != projectid; 
	};

	var projectfolder = 'images/projects/Project' + projectid + '/'; 
	var projectThumbfolder = projectfolder + 'thumb/';

	$scope.projectImages = [];

	$scope.projectImage = projectfolder + '1.jpg';
	$scope.addProjectImages = function()
	{
		for(var i =1; i < $scope.imageCount; i++)
		{
			var imgPath = projectfolder + (i) + '.jpg';
			var thumbPath = projectThumbfolder + (i) + '.jpg';
			$scope.projectImages.push({thumbUrl:thumbPath,url:imgPath});
		}
	};

    $scope.methods = {};
	$scope.openGallery = function () {
	    $scope.methods.open();
	};

	$scope.openGallery1 = function () {
	    //$("#thumbnailsdiv").smoothDivScroll({
	    //    autoScrollingMode: "onStart"
	    //});
	    $("#thumbnailsdiv").smoothTouchScroll({
	        continuousScrolling: false
	    });
	};
	$scope.addProjectImages();
	
	$scope.methods = {};
	$scope.openGallery = function () {
	    $scope.methods.open();
	};

	$scope.openGallery1 = function () {
	    //$("#thumbnailsdiv").smoothDivScroll({
	    //    autoScrollingMode: "onStart"
	    //});
	    $("#thumbnailsdiv").smoothTouchScroll({
	        continuousScrolling: false
	    });
	};
	var fbShareUrl = 'http://www.facebook.com/sharer.php?u=http://alphaphotography.me/projects.html?id=' + projectid;
	var twitterShareUrl = 'https://twitter.com/share?url=http://alphaphotography.me/projects.html?id=' + projectid;
	var googleShareUrl = 'https://plus.google.com/share?url=http://alphaphotography.me/projects.html?id=' + projectid;

	$scope.openFb = function()
	{
		window.open(fbShareUrl,'',width=600,height=300); 
	};

	$scope.openTwitter = function()
	{
		window.open(twitterShareUrl,'',width=600,height=300); 
	};

	$scope.openGoogle = function()
	{
		window.open(googleShareUrl,'',width=600,height=300); 
	};

	window.fbAsyncInit = function () {
	    FB.init({
	        appId: '1948594815364489',
	        xfbml: true,
	        version: 'v2.8'
	    });
	    FB.AppEvents.logPageView();
	};

	(function (d, s, id) {
	    var js, fjs = d.getElementsByTagName(s)[0];
	    if (d.getElementById(id)) { return; }
	    js = d.createElement(s); js.id = id;
	    js.src = "js/fbsdk.js";
	    fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	$scope.shareOnFacebook = function() {
	    FB.ui({
	        method: 'share',
	        display: 'popup',
	        href: $scope.projectUrl,
	        description: $scope.description,
	        title: $scope.title,
	        picture: $scope.projectImage
	    }, function (response) { });
	}
});

// myApp.filter('range', function() {
//   return function(images) {
//     total = parseInt(total);

//     for (var i=0; i<total; i++) {
//       input.push(i);
//     }

//     return input;
//   };
// });