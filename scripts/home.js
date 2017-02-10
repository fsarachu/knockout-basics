var viewModel = function () {
    this.name = ko.observable("Jim");
}

ko.applyBindings(new viewModel());