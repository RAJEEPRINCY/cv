$(".ada").click(function() {
            var x=$(this).attr("href");
            var y=x.slice(1,x.length);
            $("."+y).removeClass("display");
        });
        
            
            
        $("#css-btn1").click(function() {
            $("#css-h12").text("FINISHED");
        });
        $("#css-btn2").click(function() {
            $("#css-h13").html("<em>FINISHED</em>");
        });
        $("#classes-btn").click(function() {
            $("#classes-h3").addClass("big-title");
        });
        $("#classes-btn1").click(function() {
            $("#classes-h31").removeClass("big-title");
        });
        $("#classes-btn2").click(function() {
            $("#classes-h32").toggleClass("big-title");
        });
        $("#changing-btn").click(function() {
            $("#changing-a").attr("href", "https://www.youtube.com/watch?v=0f_ho4Wem0w");
            $("#changing-a").html("surarai potru");
        });
        $("input").keypress(function(event) {
            $("#forinput").html(event.key);
        })
        $("#mouseover").on("mouseover", function() {
            $("#mouseover").css("color", "purple");
        });
        $("#adding-btn").click(function() {
            $("#adding-h2").before("<button>click</button>");
        });
        $("#adding-btn1").click(function() {
            $("#adding-h2").after("<button>click</button>");
        });
        $("#adding-btn2").click(function() {
            $("#adding-h2").prepend("<button>click</button>");
        });
        $("#adding-btn3").click(function() {
            $("#adding-h2").append("<button>click</button>");
        });
        $("#changing-btn").click(function() {
            $("#changing-h2").hide();
        });

        $("#changing-btn1").click(function() {
            $("#changing-h21").toggle();
        });

        $("#changing-btn2").click(function() {
            $("#changing-h22").fadeOut();
        });
        $("#changing-btn3").click(function() {
            $("#changing-h23").fadeToggle();
        });