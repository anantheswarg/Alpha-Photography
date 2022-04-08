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
        for (var i = 0; i < 25; i++) {
            var imgPath = recentworkFolder + (i + 1) + '.jpg';
            var thumbPath = recentworkThumbFolder + (i + 1) + '.jpg';
            $scope.recentworkImages.push({ thumbUrl: thumbPath, url: imgPath });
        }
    };

    $scope.loadRecentImages();

    //shuffle($scope.recentworkImages);

	$scope.recentProjects = [
		{id:1, title:'FASHION',image:'images/projects/project1.jpg', shortDescription:'Flaunt your mojo'},
		{id:2, title:'CELEBRITIES',image:'images/projects/project2.jpg', shortDescription:'A few celebrities I have worked with'},
		{id:3, title:'KIDS',image:'images/projects/project3.jpg', shortDescription:'Joy of life'},
		{id:4, title:'COUPLE',image:'images/projects/project4.jpg', shortDescription:'Toggether is better'},
		{id:5, title:'TRAVEL',image:'images/projects/project5.jpg', shortDescription:'Life is nomadic'},
		{id:6, title:'FOOD',image:'images/projects/project6.jpg', shortDescription:"Eat to live. Live to Eat"},
		// {id:7, title:'Fine Art',image:'images/projects/project7.jpg', shortDescription:'Art is a way of Life'}    	
    ];

	$scope.testimonials = [
		// { author: 'Neha Sharma', image:'images/testimonials/2.jpg', authorDescription:' - a Techie from Hyderabad, India', content:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
		{ author: 'Adarsh Kumar', image: 'images/testimonials/1.jpg', authorDescription: ' - a Salsa dancer from Seattle, US', content: 'I had the chance of working with Ananth on his Seattle trip. He tries to tell a story, portrays a character out of it, paints a personality, a story of real You though his art of photography. He knows how to capture candid moments, expressions, and the things which cant be put into words.' },
		{ author: 'Prachi Thaker', image: 'images/testimonials/3.jpg', authorDescription: ' - a Model and an actress from Tollywood', content: 'Alpha Photons by Ananth is a label which has a unique style of work. Just by playing with natural lights  one can create a beautiful output of photos. I loved my photos not only beause i looked pretty in them but the emotion was captured perfectly!' },
		{ author: 'Meenu Avi', image: 'images/testimonials/4.jpg', authorDescription: ' - a Software engineer fom Banglore, India', content: 'We got our pre wedding shoot done from Ananth and it was AMAZING. We loved the approach how he executed the entire shoot. It was both professional and crazy..in a friendly manner. He captured great shots and the end results were fantastic!!' },
		// { author: 'Swetha', image: 'images/testimonials/4.jpg', authorDescription: ' - Owner of Sweyadhara studios', content: 'We got our pre wedding shoot done from Ananth and it was AMAZING. We loved the approach how he executed the entire shoot. It was both professional and crazy..in a friendly manner. He captured great shots and the end results were fantastic!!' },
		{ author: 'Megha', image: 'images/testimonials/5.jpg', authorDescription: ' - an Architect from Doha, Qatar', content: 'I worked with Ananth in Doha, Qatar. He not only makes you be yourself in the pictures but also portrays the best of you. Be it Expressions, look, style, lights, color, shade, his photos will speak the best of you and the place! I had to question - which picture I like the most! So undoubtedly he is good at his work!' },
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