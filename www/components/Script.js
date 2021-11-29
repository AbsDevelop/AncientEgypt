// This is a JavaScript file

 $(document).on("click", "#iniciar", function() {
   //Usamos o Window.location para redirecionar a página:
   window.location.href = "p1.html";
});

 $(document).on("click", "#resposta1", function() {
    var res = $("input[type='radio'][name='radio']:checked").val();
    if (res == 1) {
      window.location.href = "p2.html";
    }else{
      navigator.notification.alert('Parabéns, você errou...\nTente de novo.', alertCallback, "Vish KK", "Sair");
        navigator.vibrate([200, 40, 600]);
        function alertCallback() {}
      window.location.href = "index.html";
    }
});

$(document).on("click", "#resposta2", function() {
    var res = $("input[type='radio'][name='radio']:checked").val();
    if (res == 1) {
      window.location.href = "p3.html";
    }else{
      navigator.notification.alert('Parabéns, você errou...\nTente de novo.', alertCallback, "Vish KK", "Sair");
        navigator.vibrate([200, 40, 600]);
        function alertCallback() {}
    window.location.href = "index.html";
    }
});

$(document).on("click", "#resposta3", function() {
    var res = $("input[type='radio'][name='radio']:checked").val();
    if (res == 1) {
      window.location.href = "p4.html";
    }else{
      navigator.notification.alert('Parabéns, você errou...\nTente de novo.', alertCallback, "Vish KK", "Sair");
        navigator.vibrate([200, 40, 600]);
        function alertCallback() {}
      window.location.href = "index.html";
    }
});

$(document).on("click", "#resposta4", function() {
    var res = $("input[type='radio'][name='radio']:checked").val();
    if (res == 1) {
      window.location.href = "p5.html";
    }else{
      navigator.notification.alert('Parabéns, você errou...\nTente de novo.', alertCallback, "Vish KK", "Sair");
        navigator.vibrate([200, 40, 600]);
        function alertCallback() {}
      window.location.href = "index.html";
    }
});

$(document).on("click", "#resposta5", function() {
    var res = $("input[type='radio'][name='radio']:checked").val();
    if (res == 1) {
      window.location.href = "p6.html";
    }else{
      navigator.notification.alert('Parabéns, você errou...\nTente de novo.', alertCallback, "Vish KK", "Sair");
        navigator.vibrate([200, 40, 600]);
        function alertCallback() {}
      window.location.href = "index.html";
    }
});

$(document).on("click", "#resposta6", function() {
    var res = $("input[type='radio'][name='radio']:checked").val();
    if (res == 1) {
      window.location.href = "p7.html";
    }else{
      navigator.notification.alert('Parabéns, você errou...\nTente de novo.', alertCallback, "Vish KK", "Sair");
        navigator.vibrate([200, 40, 600]);
        function alertCallback() {}
      window.location.href = "index.html";
    }
});

$(document).on("click", "#resposta7", function() {
    var res = $("input[type='radio'][name='radio']:checked").val();
    if (res == 1) {
      window.location.href = "p8.html";
    }else{
      navigator.notification.alert('Parabéns, você errou...\nTente de novo.', alertCallback, "Vish KK", "Sair");
        navigator.vibrate([200, 40, 600]);
        function alertCallback() {}
      window.location.href = "index.html";
    }
});

$(document).on("click", "#resposta8", function() {
    var res = $("input[type='radio'][name='radio']:checked").val();
    if (res == 1) {
      window.location.href = "p9.html";
    }else{
      navigator.notification.alert('Parabéns, você errou...\nTente de novo.', alertCallback, "Vish KK", "Sair");
        navigator.vibrate([200, 40, 600]);
        function alertCallback() {}
      window.location.href = "index.html";
    }
});

$(document).on("click", "#resposta9", function() {
    var res = $("input[type='radio'][name='radio']:checked").val();
    if (res == 1) {
      window.location.href = "p10.html";
    }else{
      navigator.notification.alert('Parabéns, você errou...\nTente de novo.', alertCallback, "Vish KK", "Sair");
        navigator.vibrate([200, 40, 600]);
        function alertCallback() {}
      window.location.href = "index.html";
    }
});

$(document).on("click", "#resposta10", function() {
    var res = $("input[type='radio'][name='radio']:checked").val();
    if (res == 1) {
      window.location.href = "p.html";
    }else{
      navigator.notification.alert('Parabéns, você errou...\nTente de novo.', alertCallback, "Vish KK", "Sair");
        navigator.vibrate([200, 40, 600]);
        function alertCallback() {}
      window.location.href = "index.html";
    }
});