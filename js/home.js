var app = angular.module('alphaPhotographyApp', ['thatisuday.ng-image-gallery', 'angular-lazy-loader']);
app.config(function (ngImageGalleryOptsProvider) {
    ngImageGalleryOptsProvider.setOpts({
        thumbnails: true,
        //inline      :   true,
        bubbles: true,
        imgBubbles: true,
        bgClose: false
    });
});
app.controller('homeController', function($scope) {
    
    var recentworkFolder = 'images/recentwork/';
    var recentworkThumbFolder = 'images/recentwork/thumb/';
    $scope.recentworkImages = [];
    $scope.loadRecentImages = function () {
        for (var i = 0; i <= 15; i++) {
            var imgPath = recentworkFolder + (i + 1) + '.jpg';
            var thumbPath = recentworkThumbFolder + (i + 1) + '.jpg';
            $scope.recentworkImages.push({ thumbUrl: thumbPath, url: imgPath });
        }
    };

    $scope.loadRecentImages();

    shuffle($scope.recentworkImages);

	$scope.recentProjects = [
		{id:1, title:'Fashion',image:'images/projects/project1.jpg', shortDescription:'Flaunt your mojo'},
		{id:2, title:'Celebrities',image:'images/projects/project2.jpg', shortDescription:'Some of the celebrities I have worked with'},
		{id:3, title:'Kids',image:'images/projects/project3.jpg', shortDescription:'Joy of life'},
		{id:5, title:'Couple',image:'images/projects/project5.jpg', shortDescription:'Toggether is better'},
		{id:4, title:'Travel',image:'images/projects/project4.jpg', shortDescription:'I see me seing me!'},
		{id:6, title:'Food',image:'images/projects/project6.jpg', shortDescription:"Eat to live. Live to Eat"},
		{id:7, title:'Fine Art',image:'images/projects/project7.jpg', shortDescription:'Art is a way of Life'}    	
    ];

	$scope.testimonials = [
		// { author: 'Neha Sharma', image:'images/testimonials/2.jpg', authorDescription:' - a Techie from Hyderabad, India', content:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
		{ author: 'Adarsh Kumar', image: 'images/testimonials/1.jpg', authorDescription: ' - a Salsa dancer from Seattle, US', content: 'I had the chance of working with Ananth on his Seattle trip in 2015 and I cant express that experience in words. He doesnt just take pictures and edit them by throwing in some fancy backgrounds and hand it over to you; he tries to tell a story, portrays a character out of it, paints a personality, a story of real You though his art of photography. He knows how to capture candid moments, expressions, and the things which cant be put into words. It was SO MUCH FUN working with you Ananth. Thanks for those amazing clicks and thanks Alpha Photons!' },
		{ author: 'Prachi Thaker', image: 'images/testimonials/3.jpg', authorDescription: ' - a Model and an actress from Tollywood', content: 'Alpha Photons by Ananth is a label which has a unique style of work. Just by playing with natural lights  one can create a beautiful output of photos. I loved my photos not only beause i looked pretty in them but the emotion was captured perfectly!' },
		{ author: 'Meenu Avi', image: 'images/testimonials/4.jpg', authorDescription: ' - a software engineer fom Banglore, India', content: 'We got our pre wedding shoot done from Ananth and it was AMAZING. We loved the approach how he executed the entire shoot. It was both professional and crazy..in a friendly manner. He captured great shots and the end results were fantastic!!' },
		// { author: 'Swetha', image: 'images/testimonials/4.jpg', authorDescription: ' - Owner of Sweyadhara studios', content: 'We got our pre wedding shoot done from Ananth and it was AMAZING. We loved the approach how he executed the entire shoot. It was both professional and crazy..in a friendly manner. He captured great shots and the end results were fantastic!!' },
	];

	shuffle($scope.testimonials);
	$scope.methods = {};
	$scope.openGallery = function () {
		$scope.methods.open();
	};

	$scope.openGallery1 = function () {
		$("#thumbnailsdiv").smoothTouchScroll({
		    continuousScrolling: false
		});
	};
});