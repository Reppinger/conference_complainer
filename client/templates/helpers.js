Template.registerHelper("formatDate", function(date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        return "Posted on: ".concat(month, "/", day, "/", year);
    }
);