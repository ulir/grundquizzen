'use strict';

angular.module('question', []);

angular.
    module('question').
    component('question', {
	templateUrl: 'components/question/question.template.html',
	controller: function SequenceListController($http) {
	    var self = this;
	    $http.get('dummy_data/questions.json').then(function(response) {
		console.log("read");
		self.data = response.data;
		self.currentIndex = 0;
		self.current = self.data.questions[self.currentIndex];
	    });
	    self.count = 0;
	    self.next = function() {
		console.log("next");
		this.currentIndex++;
		this.current = this.data.questions[self.currentIndex];
	    }

	}
    });
