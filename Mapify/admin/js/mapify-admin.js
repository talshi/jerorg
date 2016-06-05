
(function ($) {

	var wp_mapify_app = angular.module('wp_mapify_app', ['ngRoute', 'ngAnimate']);

	//	Global 
	var x = 0;
	var y = 0;
	var index = 0;

	(function ($) {

		/*
		 * ROUTING CONFIGURATIONS
		 */

		wp_mapify_app.config(function ($routeProvider) {
			$routeProvider
			.when('/map', {
				templateUrl: '/wp-content/plugins/Mapify/admin/partials/mapify-map-display.php',
				controller: 'mapCtrl',
				controllerAs: 'map'
			})
			.when('/activities', {
				templateUrl: '/wp-content/plugins/Mapify/admin/partials/mapify-activities-display.php',
				controller: 'activitiesCtrl',
				controllerAs: 'activities'
			})
			.when('/categories', {
				templateUrl: '/wp-content/plugins/Mapify/admin/partials/mapify-categories-display.php',
				controller: 'categoriesCtrl',
				controllerAs: 'categories'
			})
			.when('/images', {
				templateUrl: '/wp-content/plugins/Mapify/admin/partials/mapify-preview-display.php',
				controller: 'imagesCtrl',
				controllerAs: 'images'
			})

			.when('/publish', {
				templateUrl: '/wp-content/plugins/Mapify/admin/partials/mapify-publish-display.php',
				controller: 'publishCtrl',
				controllerAs: 'publish'
			})
			.otherwise({
				redirectTo: '/map'
			});
		});

		/*
		 * END ROUTING CONFIGURATIONS
		 */

		/*
		 * CONTROLLERS
		 */

		wp_mapify_app.controller('adminCtrl', function($scope, $location) {
			$scope.isActive = function (viewLocation) { 
				return viewLocation === $location.path();
			};
		});

		wp_mapify_app.controller('mapCtrl', function ($scope) {

		});


		
	})(jQuery);
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	// upload activities images
	
	wp_mapify_app.controller('imagesCtrl', function ($scope) {
		jQuery(document).ready(function ($) {
	         
			$scope.activities_list = [
			                          { id: '1', name: 'A', date: '1/12/2008',category: 'B',neighborhood:'GILO',  description: 'blablabla',x:'0',y:'0'},
			                          { id: '2', name: 'B', date: '21/12/2009',category: 'A',neighborhood:'ARMON', description: 'blablabla2',x:'20',y:'20'},
			                          { id: '3', name: 'C', date: '12/12/2010',category: 'D',neighborhood:'KATMON', description: 'blablabla3',x:'30',y:'30'},
			                          { id: '4', name: 'D', date: '13/12/2010',category: 'H',neighborhood:'PISGAT', description: 'blablabla3',x:'40',y:'40'},
			                          { id: '5', name: 'E', date: '12/11/2010',category: 'C',neighborhood:'MSSOA', description: 'blablabla3',x:'50',y:'50'},
			                          { id: '6', name: 'F', date: '13/12/2010',category: 'E',neighborhood:'KRYAT YOVAL', description: 'blablabla3',x:'60',y:'60'},                              
			                          { id: '7', name: 'G', date: '12/12/1996',category: 'F',neighborhood:'ARNONA', description: 'blablabla3',x:'80',y:'80'}
			                          ];
			$("#upload_image_button_neighborhood").click(function (e) {
	            e.preventDefault();
	            var image = wp.media({
	                title: 'Upload Image',
	                multiple: false
	            }).open()
	            .on('select', function (e) {
	                // This will return the selected image from the Media Uploader, the result is an object
	                var uploaded_image = image.state().get('selection').first();
	                // We convert uploaded_image to a JSON object to make accessing it easier
	                // Output to the console uploaded_image
	                //console.log(uploaded_image);
	                var image_url = uploaded_image.toJSON().url;
	                // Let's assign the url value to the input field
	                $('#upload_image_neighborhood').val(image_url)
	                var image_link = $('#upload_image_neighborhood').val();
	                $("#preview_label").html("Preview:");
	                $("#img_preview").attr("src", image_link);
	            });
	        });

	         $("#save_button_neighborhood").click(function() {
	             alert("SSSAVVEEE");
//	     		img_url = jQuery("#upload_image_main").val();
//	     		$.ajax({
//	     			url: "../wp-content/plugins/Mapify/DB/save-img.php",
//	     			type: "POST",
//	     			dataType: "json",
//	     			data: {
//	     				'img_url': img_url,
//	     				//TODO fix neighborhood data
//	     				'neighborhood' : "main"
//	     			},
//	     			success: function(data) {
//	     				//console.log(data);
//	     				$("#success").html("SUCCESS!!!!!!!!!!!!");
//	     			},
//	     			error: function(error) {
//	     				console.log(error);
//	     			}
//	   		});
	     	});
	    });

	});
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	wp_mapify_app.controller('activitiesCtrl', function ($scope) {
		$scope.sortBy = 'name';

		$scope.activities_list = [
		                          { id: '1', name: 'A', date: '1/12/2008',category: 'B',neighborhood:'GILO',  description: 'blablabla',x:'0',y:'0'},
		                          { id: '2', name: 'B', date: '21/12/2009',category: 'A',neighborhood:'ARMON', description: 'blablabla2',x:'20',y:'20'},
		                          { id: '3', name: 'C', date: '12/12/2010',category: 'D',neighborhood:'KATMON', description: 'blablabla3',x:'30',y:'30'},
		                          { id: '4', name: 'D', date: '13/12/2010',category: 'H',neighborhood:'PISGAT', description: 'blablabla3',x:'40',y:'40'},
		                          { id: '5', name: 'E', date: '12/11/2010',category: 'C',neighborhood:'MSSOA', description: 'blablabla3',x:'50',y:'50'},
		                          { id: '6', name: 'F', date: '13/12/2010',category: 'E',neighborhood:'KRYAT YOVAL', description: 'blablabla3',x:'60',y:'60'},                              
		                          { id: '7', name: 'G', date: '12/12/1996',category: 'F',neighborhood:'ARNONA', description: 'blablabla3',x:'80',y:'80'}
		                          ];

		// for categories choose!!!!!!!

		$scope.categories_list = [
		                          { name: 'Berale', description: 'category1'},
		                          { name: 'BeraleBerale', description: 'category2'},
		                          { name: 'CCCCCCCCCCCCCC', description: 'category3'},
		                          { name: 'E', description: 'category4'},
		                          { name: 'D', description: 'category5'},
		                          { name: 'F', description: 'category6'},
		                          { name: 'G', description: 'category7'},
		                          { name: 'H', description: 'category8'}
		                          ];


		$scope.createCoords = function(event) {

			var r = document.getElementById("image-activities").getBoundingClientRect();

			var pageCoords_left = r.left;
			var pageCoords_top = r.top;

			var clickX = event.offsetX;
			var clickY = event.offsetY;


			console.log("Click x : " + clickX +" clickY :"+ clickY );
			console.log(jQuery("#image-activities").width() + " " + jQuery("#image-activities").height());


			x = (clickX * 100) / jQuery("#image-activities").width();
			y = (clickY * 100) / jQuery("#image-activities").height();


			jQuery("#locationX").html(x);
			jQuery("#locationY").html(y);

			$scope.locationX = x;
			$scope.locationY = y;

		}

		$scope.addActivity = function(event) {							

			// TODO validation of forms
//			if($scope.activityName == undefined)
//			{
//			alert("Insert Activity Name");
//			return false;
//			}
//			if($scope.activityDate == undefined)
//			{
//			alert("Insert Activity Date");
//			return false;    			
//			}
//			if($scope.activityCategory == ' ')
//			{
//			alert("Insert Activity Category");
//			return false;    			
//			}
//			if($scope.neighborhood == undefined)
//			{
//			alert("Error: Insert Neighbrhood");
//			return false;
//			}
//			if($scope.activityDescription == undefined)
//			{
//			alert("Error: Insert Neighbrhood");
//			return false;
//			}

			// add to DATA BASE

			//var date = 
			alert("before add to DB");

			$.ajax({
				url: "../wp-content/plugins/Mapify/DB/save-activity.php",
				type: "POST",
				data: {
					//'id' : "0",
					'name' : $scope.activityName,
					'date' : $scope.activityDate,
					'description' : $scope.activityDescription,
					'neighborhood' : $scope.neighborhood,
					//	'showOnMap' : "show", // need to FIX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
					'locationX' : x,
					'locationY' : y,
					'category' : "blabla", /// need to FIX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				},
				success: function(data) {
					console.log(data);
				},
				error: function(error) {
					console.log(error);
				}
			});


			// 

			$scope.activities_list.push({ id: '0', name: $scope.activityName, date: $scope.activityDate, neighborhood: $scope.neighborhood, category: $scope.activityCategory ,description: $scope.activityDescription });

			$scope.activityName = ' ';
			$scope.activityDate = ' ';
			$scope.activityCategory = ' ';
			$scope.activityDescription = ' ';
			$scope.neighborhood = ' ';

			//$scope.$apply();

			var m = "<img id='img-marker" + index + "' class='marker' src='/wp-content/plugins/Mapify/admin/images/map-marker-icon.png' data-toggle='modal' data-target='#myImg'></img>";
			jQuery("#image-activities").after(m);

			// add activity to table

			// --
			var point = getFinishPoint(x,y); // return the fix X & Y after validation

			var newX = (point.x * 100) / point.w;
			var newY = (point.y * 100) / point.h;

			if(newX > 95)
				newX = 95;

			if(newY > 93)
				newY = 95;

			jQuery("#img-marker" + index).css({
				"top": newY + '%',
				"left": newX + '%'
			});
			index++;
		};

		$scope.initActivities = function(){

			for(var i = 0 ; i < $scope.activities_list.length ; i++)
			{

				var m = "<img id='img-marker" + index + "' class='marker' src='/wp-content/plugins/Mapify/admin/images/map-marker-icon.png' data-toggle='modal' data-target='#myImg'></img>";
				jQuery("#image-activities").after(m);


				jQuery("#img-marker" + index).css({
					"top": $scope.activities_list[i].y + '%',
					"left": $scope.activities_list[i].x + '%'
				});

			}	
		}

		jQuery(window).resize(function(){

			for(var i = 0 ; i < $scope.activities_list.length ; i++)
			{
				//		x = (clickX * 100) / jQuery("#image-activities").width();
				//		y = (clickY * 100) / jQuery("#image-activities").height();

				//console.log($scope.activities_list[i].x);
				//console.log($scope.activities_list[i].y);

				var m = "<img id='img-marker" + index + "' class='marker' src='/wp-content/plugins/Mapify/admin/images/map-marker-icon.png' data-toggle='modal' data-target='#myImg'></img>";
				jQuery("#image-activities").after(m);


				jQuery("#img-marker" + index).css({
					"top": $scope.activities_list[i].x,
					"left": $scope.activities_list[i].y
				});

			}	

		});
	});

	wp_mapify_app.controller('categoriesCtrl', function ($scope) {

		$scope.sortBy = 'name';
		$scope.categories_list = [
		                          { name: 'A', description: 'category1'},
		                          { name: 'B', description: 'category2'},
		                          { name: 'C', description: 'category3'},
		                          { name: 'E', description: 'category4'},
		                          { name: 'D', description: 'category5'},
		                          { name: 'F', description: 'category6'},
		                          { name: 'G', description: 'category7'},
		                          { name: 'H', description: 'category8'}
		                          ];

		jQuery("#upload_image_button_category").click(function (e) {
			e.preventDefault();
		            var image = wp.media({
		                title: 'Upload Image',
		                multiple: false
		            }).open()
		            .on('select', function (e) {
		                // This will return the selected image from the Media Uploader, the result is an object
		                var uploaded_image = image.state().get('selection').first();
		                // We convert uploaded_image to a JSON object to make accessing it easier
		                // Output to the console uploaded_image
		                //console.log(uploaded_image);
		                var image_url = uploaded_image.toJSON().url;
		                // Let's assign the url value to the input field
		                $('#upload_image_category').val(image_url)
		                var image_link = $('#upload_image_category').val();
		             //   $("#preview_label").html("Preview:");
		              //  $("#img_preview").attr("src", image_link);
		            });
		        });		

		$scope.addCategory = function(){

			if($scope.CategoryName == undefined)
			{
				alert("Insert Category Name");
				$scope.CategoryName = ' ';
				$scope.CategoryDescription = ' ';
				$("#upload_image_category").val(' ');
				return false;
			}
			
//			$scope.categories_list.push({ id: '0', name: $scope.CategoryName,description: $scope.CategoryDescription });

			//$scope.$apply();
			
			alert("ENTER TO DB ");
			$.ajax({
				url: "../wp-content/plugins/Mapify/DB/save-category.php",
				type: "POST",
				data: {
					logoUrl : $("#upload_image_category").val(),
					name : $scope.CategoryName,
					description :$scope.CategoryDescription 
				},
				success: function(data) {
					console.log(data);
				},
				error: function(error) {
					console.log(error);
				}
			});
			$scope.CategoryName = ' ';
			$scope.CategoryDescription = ' ';
			$("#upload_image_category").val(' ');
		};
	});

	wp_mapify_app.controller('previewCtrl', function ($scope) {

	});

	wp_mapify_app.controller('publishCtrl', function ($scope) {

	});


})(jQuery);

function getFinishPoint(x,y){
	var div = document.getElementById("image-activities");
	var rect = div.getBoundingClientRect();

	var x_left = rect.left;
	var y_top = rect.top;
	var w_ = rect.right - rect.left;
	var h_ = rect.bottom - rect.top;

	var x_finish;
	var y_finish;

	if( (y/100)*h_ < 25 )  // keep the marker in map from top!!
		y_finish = ((100)*(25))/(h_);			
	else
		y_finish = (y / 100) * h_ - (25);		

	if( (x/100)*w_ < 12.5 )  // keep the marker in map from left!!
	{	
		x_finish = ((100)*(12.5))/(w_);
	}
	else if ((w_ - (x*w_)/100 < 12.5)) // keep the marker in map from right!!
	{					
		x_finish = w_ - 25;
	}	
	else{
		x_finish = (x / 100) * w_  - 12.5;
	}	

	return {x: x_finish, y:y_finish , w:w_ , h:h_};
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function add_newActivity_DB(){
	alert("ADD NEW ACTIVITY TO DB");

//	if($('#neighborhood').val().length  == 0 || $('#upload_image_neighborhood').val().length == 0 )
//	{
//	alert("Enter neighborhood name and URL image");
//	return;
//	}

	$.ajax({
		url: "../wp-content/plugins/Mapify/DB/save-activity.php",
		type: "POST",
		data: {
			'id' : "0",
			'name' : "x",
			'time' : "100",
			'description' : "des",
			'neighborhood' : "neig",
			//	'showOnMap' : "show",
			'locationX' : "locX",
			'locationY' : "locY",
			'category' : "cat",
		},
		success: function(data) {
			console.log(data);
		},
		error: function(error) {
			console.log(error);
		}
	});
}

