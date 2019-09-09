function inner() {

    var box = document.getElementsByClassName('photo')[0];
    if (box) {


        function init() {
            var width = box.offsetWidth;
            var count = parseInt(width / 1920 * 1280);
            for (var i = 0; i < count; i++) {
                var size = parseInt(ran(200, 120) / 10);
                var ele = document.createElement('div');
                ele.classList.add('item');
                ele.style.width = size + 'px';
                ele.style.height = size + 'px';
                ele.style.left = ran(0, 95) + '%';
                ele.style.top = ran(20, 80) + '%';
                ele.style.animationDelay = ran(0, 30) / 10 + 's';
                box.appendChild(ele);
            }
        }

        function ran(min, max) {
            min = parseInt(min);
            max = parseInt(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        init();


        setInterval(function () {
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w1').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w2').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w3').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w4').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w5').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w6').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w7').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w8').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w9').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w10').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w11').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w12').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w13').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w14').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w15').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w16').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w17').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w18').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w19').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w20').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w21').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w22').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w23').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w24').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w25').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w26').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w27').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w28').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w29').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w30').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w31').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w32').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w33').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w34').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w35').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w36').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w37').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w38').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w39').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w40').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w41').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w42').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w43').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w44').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w45').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w46').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w47').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w48').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w49').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
        }, 2000)

    }
}
// var usename = ['wjy', 'hyj', 'sjb']
var use_name = document.getElementById('use')
var btn = document.getElementById('btn');
//  var body = document.getElementsByTagName('body')[0]
//  console.log(body)
btn.onclick = function () {
    // if(use_name.value === '吴静玉'){
    //     wjy()
    // }else if(use_name.value === '胡洋杰'){
    //     hyj()
    // }else if(use_name.value === '沈建博'){
    //     sjb()
    // }else{
    //     alert('没你啥事')
    // }
    switch(use_name.value){
        case '胡均': hj();
        break;
        case '朴春龙': pcl();
        break;
        case '王伟': ww();
        break;
        case '俞婷婷': ytt();
        break;
        case '梁鹏飞': lpf();
        break;
        case '沈建博': sjb();
        break;
        case '胡洋杰': hyj();
        break;
        case '吴静玉': wjy();
        break;
        case '王堤': wd();
        break;
        case '张鑫雨': zxy();
        break;
        case '王协群': wxq();
        break;
        case '杜江': dls();
        break;
        default: alert('没你啥事');
    }
    inner()
}


function wjy(){
    document.body.innerHTML = `<div class="photo">
                                    <video src="../video/95e5ef2c7d1c4acfcce0caedbebf231d.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/大张伟 - 我怎么这么好看.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">小吴你越来越瘦了</div>
                                <div class='w' id="w2">小吴多吃点</div>
                                <div class='w' id="w3">小吴你这么瘦该咋整啊</div>
                                <div class='w' id="w4">小玉玉你好美</div>
                                <div class='w' id="w5">小玉玉事业顺利</div>
                                <div class='w' id="w6">教师节快乐</div>
                                <div class='w' id="w7">祝吴老师早日找到另一半</div>
                                <div class='w' id="w8">小小吴天天开心</div>
                                <div class='w' id="w9">小小吴越来越苗条</div>
                                <div class='w' id="w10">吴老师别再胖了</div>
                                <div class='w' id="w11">春蚕到死丝方尽，蜡炬成灰泪始干</div>
                                <div class='w' id="w12">祝吴老师身体健康</div>
                                <div class='w' id="w13">老吴越来越美</div>
                                <div class='w' id="w14">祝吴静玉同学一路有良人相伴</div>
                                <div class='w' id="w15">小吴你越来越瘦了</div>
                                <div class='w' id="w16">小吴多吃点</div>
                                <div class='w' id="w17">小吴你这么瘦该咋整啊</div>
                                <div class='w' id="w18">小玉玉你好美</div>
                                <div class='w' id="w19">小玉玉事业顺利</div>
                                <div class='w' id="w20">教师节快乐</div>
                                <div class='w' id="w21">祝吴老师早日找到另一半</div>
                                <div class='w' id="w22">小小吴天天开心</div>
                                <div class='w' id="w23">小小吴越来越苗条</div>
                                <div class='w' id="w24">吴老师别再胖了</div>
                                <div class='w' id="w25">小玉童鞋天生丽质</div>
                                <div class='w' id="w26">祝吴老师身体健康</div>
                                <div class='w' id="w27">老吴越来越美</div>
                                <div class='w' id="w28">祝吴静玉同学一路有良人相伴</div>
                                <div class='w' id="w29">小吴你越来越瘦了</div>
                                <div class='w' id="w30">愿你三冬暖，愿你春不寒</div>
                                <div class='w' id="w31">小吴你越来越瘦了</div>
                                <div class='w' id="w32">小吴多吃点</div>
                                <div class='w' id="w33">小吴你这么瘦该咋整啊</div>
                                <div class='w' id="w34">老吴美丽动人</div>
                                <div class='w' id="w35">小玉玉事业顺利</div>
                                <div class='w' id="w36">教师节快乐</div>
                                <div class='w' id="w37">祝吴老师早日找到另一半</div>
                                <div class='w' id="w38">小小吴天天开心</div>
                                <div class='w' id="w39">小小吴越来越苗条</div>
                                <div class='w' id="w40">吴老师别再胖了</div>
                                <div class='w' id="w41">祝吴老师身体健康</div>
                                <div class='w' id="w42">老吴越来越美</div>
                                <div class='w' id="w43">小吴你这么瘦该咋整啊</div>
                                <div class='w' id="w44">祝吴静玉同学一路有良人相伴</div>
                                <div class='w' id="w45">小吴你越来越瘦了</div>
                                <div class='w' id="w46">祝吴老师早日瘦成一道闪电</div>
                                <div class='w' id="w47">吴老师蕙质兰心</div>
                                <div class='w' id="w48">吴老师美若天仙</div>
                                <div class='w' id="w49">吴老师别再胖了</div>
                                <div class='w' id="w50">教师节快乐</div>`
}
function sjb(){
    document.body.innerHTML = `<div class="photo">
                                    <video src="../video/2f7d7596456f8fcc3f707f427537a1fc.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/薛之谦 - 为了遇见你.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">老沈你真帅</div>
                                <div class='w' id="w2">老沈你最帅</div>
                                <div class='w' id="w3">老沈越来越帅</div>
                                <div class='w' id="w4">老沈教师节快乐</div>
                                <div class='w' id="w5">老沈玉树临风</div>
                                <div class='w' id="w6">祝老沈身体健康</div>
                                <div class='w' id="w7">老沈天天开心</div>
                                <div class='w' id="w8">老沈一天比一天帅</div>
                                <div class='w' id="w9">老沈英俊潇洒</div>
                                <div class='w' id="w10">老沈教师节快乐</div>
                                <div class='w' id="w11">老沈你真帅</div>
                                <div class='w' id="w12">老沈你最帅</div>
                                <div class='w' id="w13">老沈越来越帅</div>
                                <div class='w' id="w14">老沈教师节快乐</div>
                                <div class='w' id="w15">老沈越活越年轻</div>
                                <div class='w' id="w16">祝老沈身体健康</div>
                                <div class='w' id="w17">老沈天天开心</div>
                                <div class='w' id="w18">老沈玉树临风</div>
                                <div class='w' id="w19">老沈英俊潇洒</div>
                                <div class='w' id="w20">老沈教师节快乐</div>
                                <div class='w' id="w21">祝老沈幸福每一天</div>
                                <div class='w' id="w22">祝老沈幸福每一天</div>
                                <div class='w' id="w23">老沈你真帅</div>
                                <div class='w' id="w24">老沈你最帅</div>
                                <div class='w' id="w25">老沈越来越帅</div>
                                <div class='w' id="w26">老沈才华横溢</div>
                                <div class='w' id="w27">老沈越活越年轻</div>
                                <div class='w' id="w28">祝老沈身体健康</div>
                                <div class='w' id="w29">老沈天天开心</div>
                                <div class='w' id="w30">老沈一天比一天帅</div>
                                <div class='w' id="w31">老沈你是贝程最帅</div>
                                <div class='w' id="w32">老沈风流倜傥</div>
                                <div class='w' id="w33">老沈你真帅</div>
                                <div class='w' id="w34">老沈你最帅</div>
                                <div class='w' id="w35">老沈英明神武</div>
                                <div class='w' id="w36">老沈教师节快乐</div>
                                <div class='w' id="w37">老沈越活越年轻</div>
                                <div class='w' id="w38">祝老沈身体健康</div>
                                <div class='w' id="w39">老沈天天开心</div>
                                <div class='w' id="w40">老沈器宇轩昂</div>
                                <div class='w' id="w41">老沈你是贝程最帅</div>
                                <div class='w' id="w42">老沈教师节快乐</div>
                                <div class='w' id="w43">祝老沈幸福每一天</div>
                                <div class='w' id="w44">老沈你真帅</div>
                                <div class='w' id="w45">老沈你最帅</div>
                                <div class='w' id="w46">老沈越来越帅</div>
                                <div class='w' id="w47">老沈教师节快乐</div>
                                <div class='w' id="w48">老沈越活越年轻</div>
                                <div class='w' id="w49">祝老沈身体健康</div>
                                <div class='w' id="w50">老沈越来越帅</div>`
}

function hyj(){
    document.body.innerHTML = `<div class="photo">
                                    <video src="../video/95e5ef2c7d1c4acfcce0caedbebf231d.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/薛之谦 - 为了遇见你.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">老胡你真帅</div>
                                <div class='w' id="w2">老胡高大威猛</div>
                                <div class='w' id="w3">老胡越来越帅</div>
                                <div class='w' id="w4">老胡教师节快乐</div>
                                <div class='w' id="w5">老胡玉树临风</div>
                                <div class='w' id="w6">祝老胡身体健康</div>
                                <div class='w' id="w7">老胡天天开心</div>
                                <div class='w' id="w8">老胡一天比一天帅</div>
                                <div class='w' id="w9">老胡你是贝程最帅</div>
                                <div class='w' id="w10">老胡英俊潇洒</div>
                                <div class='w' id="w11">老胡你真帅</div>
                                <div class='w' id="w12">老胡你最帅</div>
                                <div class='w' id="w13">老胡越来越帅</div>
                                <div class='w' id="w14">老胡教师节快乐</div>
                                <div class='w' id="w15">老胡越活越年轻</div>
                                <div class='w' id="w16">老胡风流倜傥</div>
                                <div class='w' id="w17">老胡天天开心</div>
                                <div class='w' id="w18">老胡一天比一天帅</div>
                                <div class='w' id="w19">老胡你是贝程最帅</div>
                                <div class='w' id="w20">老胡教师节快乐</div>
                                <div class='w' id="w21">祝老胡幸福每一天</div>
                                <div class='w' id="w22">老胡风度翩翩</div>
                                <div class='w' id="w23">老胡你真帅</div>
                                <div class='w' id="w24">老胡你是世界上最棒的人</div>
                                <div class='w' id="w25">老胡越来越帅</div>
                                <div class='w' id="w26">老胡教师节快乐</div>
                                <div class='w' id="w27">老胡越活越年轻</div>
                                <div class='w' id="w28">祝老胡身体健康</div>
                                <div class='w' id="w29">老胡天天开心</div>
                                <div class='w' id="w30">老胡一天比一天帅</div>
                                <div class='w' id="w31">老胡器宇轩昂</div>
                                <div class='w' id="w32">老胡教师节快乐</div>
                                <div class='w' id="w33">老胡你真帅</div>
                                <div class='w' id="w34">老胡英明神武</div>
                                <div class='w' id="w35">老胡越来越帅</div>
                                <div class='w' id="w36">老胡教师节快乐</div>
                                <div class='w' id="w37">老胡越活越年轻</div>
                                <div class='w' id="w38">祝老胡身体健康</div>
                                <div class='w' id="w39">老胡风流倜傥</div>
                                <div class='w' id="w40">老胡一天比一天帅</div>
                                <div class='w' id="w41">老胡你是贝程最帅</div>
                                <div class='w' id="w42">老胡教师节快乐</div>
                                <div class='w' id="w43">祝老胡幸福每一天</div>
                                <div class='w' id="w44">老胡玉树临风</div>
                                <div class='w' id="w45">老胡你最帅</div>
                                <div class='w' id="w46">老胡越来越帅</div>
                                <div class='w' id="w47">老胡教师节快乐</div>
                                <div class='w' id="w48">老胡越活越年轻</div>
                                <div class='w' id="w49">祝老胡身体健康</div>
                                <div class='w' id="w50">老胡越来越帅</div>`
}
function hj(){
    document.body.innerHTML = `<div class="photo">
                                    <video src="../video/95e5ef2c7d1c4acfcce0caedbebf231d.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/薛之谦 - 为了遇见你.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">胡总你真帅</div>
                                <div class='w' id="w2">胡总高大威猛</div>
                                <div class='w' id="w3">胡总越来越帅</div>
                                <div class='w' id="w4">胡总教师节快乐</div>
                                <div class='w' id="w5">胡总玉树临风</div>
                                <div class='w' id="w6">祝胡总身体健康</div>
                                <div class='w' id="w7">胡总天天开心</div>
                                <div class='w' id="w8">胡总一天比一天帅</div>
                                <div class='w' id="w9">胡总你是贝程最帅</div>
                                <div class='w' id="w10">胡总英俊潇洒</div>
                                <div class='w' id="w11">胡总你真帅</div>
                                <div class='w' id="w12">胡总你最帅</div>
                                <div class='w' id="w13">胡总越来越帅</div>
                                <div class='w' id="w14">胡总教师节快乐</div>
                                <div class='w' id="w15">胡总越活越年轻</div>
                                <div class='w' id="w16">胡总风流倜傥</div>
                                <div class='w' id="w17">胡总天天开心</div>
                                <div class='w' id="w18">胡总一天比一天帅</div>
                                <div class='w' id="w19">胡总你是贝程最帅</div>
                                <div class='w' id="w20">胡总教师节快乐</div>
                                <div class='w' id="w21">祝胡总幸福每一天</div>
                                <div class='w' id="w22">胡总风度翩翩</div>
                                <div class='w' id="w23">胡总你真帅</div>
                                <div class='w' id="w24">胡总你是世界上最棒的人</div>
                                <div class='w' id="w25">胡总越来越帅</div>
                                <div class='w' id="w26">胡总教师节快乐</div>
                                <div class='w' id="w27">胡总越活越年轻</div>
                                <div class='w' id="w28">祝胡总身体健康</div>
                                <div class='w' id="w29">胡总天天开心</div>
                                <div class='w' id="w30">胡总一天比一天帅</div>
                                <div class='w' id="w31">胡总器宇轩昂</div>
                                <div class='w' id="w32">胡总教师节快乐</div>
                                <div class='w' id="w33">胡总你真帅</div>
                                <div class='w' id="w34">胡总英明神武</div>
                                <div class='w' id="w35">胡总越来越帅</div>
                                <div class='w' id="w36">胡总教师节快乐</div>
                                <div class='w' id="w37">胡总越活越年轻</div>
                                <div class='w' id="w38">祝胡总身体健康</div>
                                <div class='w' id="w39">胡总风流倜傥</div>
                                <div class='w' id="w40">胡总一天比一天帅</div>
                                <div class='w' id="w41">胡总你是贝程最帅</div>
                                <div class='w' id="w42">胡总教师节快乐</div>
                                <div class='w' id="w43">祝胡总幸福每一天</div>
                                <div class='w' id="w44">胡总玉树临风</div>
                                <div class='w' id="w45">胡总你最帅</div>
                                <div class='w' id="w46">胡总越来越帅</div>
                                <div class='w' id="w47">胡总教师节快乐</div>
                                <div class='w' id="w48">胡总越活越年轻</div>
                                <div class='w' id="w49">祝胡总身体健康</div>
                                <div class='w' id="w50">胡总越来越帅</div>`
}
function dls(){
    document.body.innerHTML = `<div class="photo">
                                    <video src="../video/95e5ef2c7d1c4acfcce0caedbebf231d.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/薛之谦 - 为了遇见你.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">杜老师你真帅</div>
                                <div class='w' id="w2">杜老师高大威猛</div>
                                <div class='w' id="w3">杜老师越来越帅</div>
                                <div class='w' id="w4">杜老师教师节快乐</div>
                                <div class='w' id="w5">杜老师玉树临风</div>
                                <div class='w' id="w6">祝杜老师身体健康</div>
                                <div class='w' id="w7">杜老师天天开心</div>
                                <div class='w' id="w8">杜老师一天比一天帅</div>
                                <div class='w' id="w9">杜老师你是贝程最帅</div>
                                <div class='w' id="w10">杜老师英俊潇洒</div>
                                <div class='w' id="w11">杜老师你真帅</div>
                                <div class='w' id="w12">杜老师你最帅</div>
                                <div class='w' id="w13">杜老师越来越帅</div>
                                <div class='w' id="w14">杜老师教师节快乐</div>
                                <div class='w' id="w15">杜老师越活越年轻</div>
                                <div class='w' id="w16">杜老师风流倜傥</div>
                                <div class='w' id="w17">杜老师天天开心</div>
                                <div class='w' id="w18">杜老师一天比一天帅</div>
                                <div class='w' id="w19">杜老师你是贝程最帅</div>
                                <div class='w' id="w20">杜老师教师节快乐</div>
                                <div class='w' id="w21">祝杜老师幸福每一天</div>
                                <div class='w' id="w22">杜老师风度翩翩</div>
                                <div class='w' id="w23">杜老师你真帅</div>
                                <div class='w' id="w24">杜老师你是世界上最棒的人</div>
                                <div class='w' id="w25">杜老师越来越帅</div>
                                <div class='w' id="w26">杜老师教师节快乐</div>
                                <div class='w' id="w27">杜老师越活越年轻</div>
                                <div class='w' id="w28">祝杜老师身体健康</div>
                                <div class='w' id="w29">杜老师天天开心</div>
                                <div class='w' id="w30">杜老师一天比一天帅</div>
                                <div class='w' id="w31">杜老师器宇轩昂</div>
                                <div class='w' id="w32">杜老师教师节快乐</div>
                                <div class='w' id="w33">杜老师你真帅</div>
                                <div class='w' id="w34">杜老师英明神武</div>
                                <div class='w' id="w35">杜老师越来越帅</div>
                                <div class='w' id="w36">杜老师教师节快乐</div>
                                <div class='w' id="w37">杜老师越活越年轻</div>
                                <div class='w' id="w38">祝杜老师身体健康</div>
                                <div class='w' id="w39">杜老师风流倜傥</div>
                                <div class='w' id="w40">杜老师一天比一天帅</div>
                                <div class='w' id="w41">杜老师你是贝程最帅</div>
                                <div class='w' id="w42">杜老师教师节快乐</div>
                                <div class='w' id="w43">祝杜老师幸福每一天</div>
                                <div class='w' id="w44">杜老师玉树临风</div>
                                <div class='w' id="w45">杜老师你最帅</div>
                                <div class='w' id="w46">杜老师越来越帅</div>
                                <div class='w' id="w47">杜老师教师节快乐</div>
                                <div class='w' id="w48">杜老师越活越年轻</div>
                                <div class='w' id="w49">祝杜老师身体健康</div>
                                <div class='w' id="w50">杜老师越来越帅</div>`
}
function wxq(){
    document.body.innerHTML = `<div class="photo">
                                    <video src="../video/95e5ef2c7d1c4acfcce0caedbebf231d.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/薛之谦 - 为了遇见你.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">王协群老师你真帅</div>
                                <div class='w' id="w2">王协群老师高大威猛</div>
                                <div class='w' id="w3">王协群老师越来越帅</div>
                                <div class='w' id="w4">王协群老师教师节快乐</div>
                                <div class='w' id="w5">王协群老师玉树临风</div>
                                <div class='w' id="w6">祝王协群老师身体健康</div>
                                <div class='w' id="w7">王协群老师天天开心</div>
                                <div class='w' id="w8">王协群老师一天比一天帅</div>
                                <div class='w' id="w9">王协群老师你是贝程最帅</div>
                                <div class='w' id="w10">王协群老师英俊潇洒</div>
                                <div class='w' id="w11">王协群老师你真帅</div>
                                <div class='w' id="w12">王协群老师你最帅</div>
                                <div class='w' id="w13">王协群老师越来越帅</div>
                                <div class='w' id="w14">王协群老师教师节快乐</div>
                                <div class='w' id="w15">王协群老师越活越年轻</div>
                                <div class='w' id="w16">王协群老师风流倜傥</div>
                                <div class='w' id="w17">王协群老师天天开心</div>
                                <div class='w' id="w18">王协群老师一天比一天帅</div>
                                <div class='w' id="w19">王协群老师你是贝程最帅</div>
                                <div class='w' id="w20">王协群老师教师节快乐</div>
                                <div class='w' id="w21">祝王协群老师幸福每一天</div>
                                <div class='w' id="w22">王协群老师风度翩翩</div>
                                <div class='w' id="w23">王协群老师你真帅</div>
                                <div class='w' id="w24">王协群老师你是世界上最棒的人</div>
                                <div class='w' id="w25">王协群老师越来越帅</div>
                                <div class='w' id="w26">王协群老师教师节快乐</div>
                                <div class='w' id="w27">王协群老师越活越年轻</div>
                                <div class='w' id="w28">祝王协群老师身体健康</div>
                                <div class='w' id="w29">王协群老师天天开心</div>
                                <div class='w' id="w30">王协群老师一天比一天帅</div>
                                <div class='w' id="w31">王协群老师器宇轩昂</div>
                                <div class='w' id="w32">王协群老师教师节快乐</div>
                                <div class='w' id="w33">王协群老师你真帅</div>
                                <div class='w' id="w34">王协群老师英明神武</div>
                                <div class='w' id="w35">王协群老师越来越帅</div>
                                <div class='w' id="w36">王协群老师教师节快乐</div>
                                <div class='w' id="w37">王协群老师越活越年轻</div>
                                <div class='w' id="w38">祝王协群老师身体健康</div>
                                <div class='w' id="w39">王协群老师风流倜傥</div>
                                <div class='w' id="w40">王协群老师一天比一天帅</div>
                                <div class='w' id="w41">王协群老师你是贝程最帅</div>
                                <div class='w' id="w42">王协群老师教师节快乐</div>
                                <div class='w' id="w43">祝王协群老师幸福每一天</div>
                                <div class='w' id="w44">王协群老师玉树临风</div>
                                <div class='w' id="w45">王协群老师你最帅</div>
                                <div class='w' id="w46">王协群老师越来越帅</div>
                                <div class='w' id="w47">王协群老师教师节快乐</div>
                                <div class='w' id="w48">王协群老师越活越年轻</div>
                                <div class='w' id="w49">祝王协群老师身体健康</div>
                                <div class='w' id="w50">王协群老师越来越帅</div>`
}
function pcl(){
    document.body.innerHTML = `<div class="photo">
                                    <video src="../video/95e5ef2c7d1c4acfcce0caedbebf231d.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/薛之谦 - 为了遇见你.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">朴老师你真帅</div>
                                <div class='w' id="w2">朴老师高大威猛</div>
                                <div class='w' id="w3">朴老师越来越帅</div>
                                <div class='w' id="w4">朴老师教师节快乐</div>
                                <div class='w' id="w5">朴老师玉树临风</div>
                                <div class='w' id="w6">祝朴老师身体健康</div>
                                <div class='w' id="w7">朴老师天天开心</div>
                                <div class='w' id="w8">朴老师一天比一天帅</div>
                                <div class='w' id="w9">朴老师你是贝程最帅</div>
                                <div class='w' id="w10">朴老师英俊潇洒</div>
                                <div class='w' id="w11">朴老师你真帅</div>
                                <div class='w' id="w12">朴老师你最帅</div>
                                <div class='w' id="w13">朴老师越来越帅</div>
                                <div class='w' id="w14">朴老师教师节快乐</div>
                                <div class='w' id="w15">朴老师越活越年轻</div>
                                <div class='w' id="w16">朴老师风流倜傥</div>
                                <div class='w' id="w17">朴老师天天开心</div>
                                <div class='w' id="w18">朴老师一天比一天帅</div>
                                <div class='w' id="w19">朴老师你是贝程最帅</div>
                                <div class='w' id="w20">朴老师教师节快乐</div>
                                <div class='w' id="w21">祝朴老师幸福每一天</div>
                                <div class='w' id="w22">朴老师风度翩翩</div>
                                <div class='w' id="w23">朴老师你真帅</div>
                                <div class='w' id="w24">朴老师你是世界上最棒的人</div>
                                <div class='w' id="w25">朴老师越来越帅</div>
                                <div class='w' id="w26">朴老师教师节快乐</div>
                                <div class='w' id="w27">朴老师越活越年轻</div>
                                <div class='w' id="w28">祝朴老师身体健康</div>
                                <div class='w' id="w29">朴老师天天开心</div>
                                <div class='w' id="w30">朴老师一天比一天帅</div>
                                <div class='w' id="w31">朴老师器宇轩昂</div>
                                <div class='w' id="w32">朴老师教师节快乐</div>
                                <div class='w' id="w33">朴老师你真帅</div>
                                <div class='w' id="w34">朴老师英明神武</div>
                                <div class='w' id="w35">朴老师越来越帅</div>
                                <div class='w' id="w36">朴老师教师节快乐</div>
                                <div class='w' id="w37">朴老师越活越年轻</div>
                                <div class='w' id="w38">祝朴老师身体健康</div>
                                <div class='w' id="w39">朴老师风流倜傥</div>
                                <div class='w' id="w40">朴老师一天比一天帅</div>
                                <div class='w' id="w41">朴老师你是贝程最帅</div>
                                <div class='w' id="w42">朴老师教师节快乐</div>
                                <div class='w' id="w43">祝朴老师幸福每一天</div>
                                <div class='w' id="w44">朴老师玉树临风</div>
                                <div class='w' id="w45">朴老师你最帅</div>
                                <div class='w' id="w46">朴老师越来越帅</div>
                                <div class='w' id="w47">朴老师教师节快乐</div>
                                <div class='w' id="w48">朴老师越活越年轻</div>
                                <div class='w' id="w49">祝朴老师身体健康</div>
                                <div class='w' id="w50">朴老师越来越帅</div>`
}
function ww(){
    document.body.innerHTML = `<div class="photo">
                                    <video src="../video/95e5ef2c7d1c4acfcce0caedbebf231d.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/薛之谦 - 为了遇见你.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">王伟老师你真帅</div>
                                <div class='w' id="w2">王伟老师高大威猛</div>
                                <div class='w' id="w3">王伟老师越来越帅</div>
                                <div class='w' id="w4">王伟老师教师节快乐</div>
                                <div class='w' id="w5">王伟老师玉树临风</div>
                                <div class='w' id="w6">祝王伟老师身体健康</div>
                                <div class='w' id="w7">王伟老师天天开心</div>
                                <div class='w' id="w8">王伟老师一天比一天帅</div>
                                <div class='w' id="w9">王伟老师你是贝程最帅</div>
                                <div class='w' id="w10">王伟老师英俊潇洒</div>
                                <div class='w' id="w11">王伟老师你真帅</div>
                                <div class='w' id="w12">王伟老师你最帅</div>
                                <div class='w' id="w13">王伟老师越来越帅</div>
                                <div class='w' id="w14">王伟老师教师节快乐</div>
                                <div class='w' id="w15">王伟老师越活越年轻</div>
                                <div class='w' id="w16">王伟老师风流倜傥</div>
                                <div class='w' id="w17">王伟老师天天开心</div>
                                <div class='w' id="w18">王伟老师一天比一天帅</div>
                                <div class='w' id="w19">王伟老师你是贝程最帅</div>
                                <div class='w' id="w20">王伟老师教师节快乐</div>
                                <div class='w' id="w21">祝王伟老师幸福每一天</div>
                                <div class='w' id="w22">王伟老师风度翩翩</div>
                                <div class='w' id="w23">王伟老师你真帅</div>
                                <div class='w' id="w24">王伟老师你是世界上最棒的人</div>
                                <div class='w' id="w25">王伟老师越来越帅</div>
                                <div class='w' id="w26">王伟老师教师节快乐</div>
                                <div class='w' id="w27">王伟老师越活越年轻</div>
                                <div class='w' id="w28">祝王伟老师身体健康</div>
                                <div class='w' id="w29">王伟老师天天开心</div>
                                <div class='w' id="w30">王伟老师一天比一天帅</div>
                                <div class='w' id="w31">王伟老师器宇轩昂</div>
                                <div class='w' id="w32">王伟老师教师节快乐</div>
                                <div class='w' id="w33">王伟老师你真帅</div>
                                <div class='w' id="w34">王伟老师英明神武</div>
                                <div class='w' id="w35">王伟老师越来越帅</div>
                                <div class='w' id="w36">王伟老师教师节快乐</div>
                                <div class='w' id="w37">王伟老师越活越年轻</div>
                                <div class='w' id="w38">祝王伟老师身体健康</div>
                                <div class='w' id="w39">王伟老师风流倜傥</div>
                                <div class='w' id="w40">王伟老师一天比一天帅</div>
                                <div class='w' id="w41">王伟老师你是贝程最帅</div>
                                <div class='w' id="w42">王伟老师教师节快乐</div>
                                <div class='w' id="w43">祝王伟老师幸福每一天</div>
                                <div class='w' id="w44">王伟老师玉树临风</div>
                                <div class='w' id="w45">王伟老师你最帅</div>
                                <div class='w' id="w46">王伟老师越来越帅</div>
                                <div class='w' id="w47">王伟老师教师节快乐</div>
                                <div class='w' id="w48">王伟老师越活越年轻</div>
                                <div class='w' id="w49">祝王伟老师身体健康</div>
                                <div class='w' id="w50">王伟老师越来越帅</div>`
}
function lpf(){
    document.body.innerHTML =  `<div class="photo">
                                    <video src="../video/95e5ef2c7d1c4acfcce0caedbebf231d.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/薛之谦 - 为了遇见你.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">梁老师你真帅</div>
                                <div class='w' id="w2">梁老师高大威猛</div>
                                <div class='w' id="w3">梁老师越来越帅</div>
                                <div class='w' id="w4">梁老师教师节快乐</div>
                                <div class='w' id="w5">梁老师玉树临风</div>
                                <div class='w' id="w6">祝梁老师身体健康</div>
                                <div class='w' id="w7">梁老师天天开心</div>
                                <div class='w' id="w8">梁老师一天比一天帅</div>
                                <div class='w' id="w9">梁老师你是贝程最帅</div>
                                <div class='w' id="w10">梁老师英俊潇洒</div>
                                <div class='w' id="w11">梁老师你真帅</div>
                                <div class='w' id="w12">梁老师你最帅</div>
                                <div class='w' id="w13">梁老师越来越帅</div>
                                <div class='w' id="w14">梁老师教师节快乐</div>
                                <div class='w' id="w15">梁老师越活越年轻</div>
                                <div class='w' id="w16">梁老师风流倜傥</div>
                                <div class='w' id="w17">梁老师天天开心</div>
                                <div class='w' id="w18">梁老师一天比一天帅</div>
                                <div class='w' id="w19">梁老师你是贝程最帅</div>
                                <div class='w' id="w20">梁老师教师节快乐</div>
                                <div class='w' id="w21">祝梁老师幸福每一天</div>
                                <div class='w' id="w22">梁老师风度翩翩</div>
                                <div class='w' id="w23">梁老师你真帅</div>
                                <div class='w' id="w24">梁老师你是世界上最棒的人</div>
                                <div class='w' id="w25">梁老师越来越帅</div>
                                <div class='w' id="w26">梁老师教师节快乐</div>
                                <div class='w' id="w27">梁老师越活越年轻</div>
                                <div class='w' id="w28">祝梁老师身体健康</div>
                                <div class='w' id="w29">梁老师天天开心</div>
                                <div class='w' id="w30">梁老师一天比一天帅</div>
                                <div class='w' id="w31">梁老师器宇轩昂</div>
                                <div class='w' id="w32">梁老师教师节快乐</div>
                                <div class='w' id="w33">梁老师你真帅</div>
                                <div class='w' id="w34">梁老师英明神武</div>
                                <div class='w' id="w35">梁老师越来越帅</div>
                                <div class='w' id="w36">梁老师教师节快乐</div>
                                <div class='w' id="w37">梁老师越活越年轻</div>
                                <div class='w' id="w38">祝梁老师身体健康</div>
                                <div class='w' id="w39">梁老师风流倜傥</div>
                                <div class='w' id="w40">梁老师一天比一天帅</div>
                                <div class='w' id="w41">梁老师你是贝程最帅</div>
                                <div class='w' id="w42">梁老师教师节快乐</div>
                                <div class='w' id="w43">祝梁老师幸福每一天</div>
                                <div class='w' id="w44">梁老师玉树临风</div>
                                <div class='w' id="w45">梁老师你最帅</div>
                                <div class='w' id="w46">梁老师越来越帅</div>
                                <div class='w' id="w47">梁老师教师节快乐</div>
                                <div class='w' id="w48">梁老师越活越年轻</div>
                                <div class='w' id="w49">祝梁老师身体健康</div>
                                <div class='w' id="w50">梁老师越来越帅</div>`
}

function ytt(){
    document.body.innerHTML = `<div class="photo">
                                    <video src="../video/95e5ef2c7d1c4acfcce0caedbebf231d.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/大张伟 - 我怎么这么好看.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">俞老师你真美</div>
                                <div class='w' id="w2">祝俞老师开心每一天</div>
                                <div class='w' id="w3">祝俞老师教师节快乐</div>
                                <div class='w' id="w4">祝俞老师永远十八岁</div>
                                <div class='w' id="w5">祝俞老师越来越美</div>
                                <div class='w' id="w6">祝俞老师身体健康</div>
                                <div class='w' id="w7">俞老师天生丽质</div>
                                <div class='w' id="w8">俞老师美若天仙</div>
                                <div class='w' id="w9">俞老师美丽动人</div>
                                <div class='w' id="w10">俞老师蕙质兰心</div>
                                <div class='w' id="w11">俞老师你真美</div>
                                <div class='w' id="w12">祝俞老师开心每一天</div>
                                <div class='w' id="w13">祝俞老师教师节快乐</div>
                                <div class='w' id="w14">祝俞老师永远十八岁</div>
                                <div class='w' id="w15">祝俞老师越来越美</div>
                                <div class='w' id="w16">俞老师天生丽质</div>
                                <div class='w' id="w17">俞老师美若天仙</div>
                                <div class='w' id="w18">俞老师美丽动人</div>
                                <div class='w' id="w19">俞老师蕙质兰心</div>
                                <div class='w' id="w20">祝俞老师开心每一天</div>
                                <div class='w' id="w21">俞老师你真美</div>
                                <div class='w' id="w22">祝俞老师教师节快乐</div>
                                <div class='w' id="w23">祝俞老师永远十八岁</div>
                                <div class='w' id="w24">祝俞老师越来越美</div>
                                <div class='w' id="w25">祝俞老师身体健康</div>
                                <div class='w' id="w26">俞老师天生丽质</div>
                                <div class='w' id="w27">俞老师美若天仙</div>
                                <div class='w' id="w28">俞老师美丽动人</div>
                                <div class='w' id="w29">俞老师蕙质兰心</div>
                                <div class='w' id="w30">祝俞老师开心每一天</div>
                                <div class='w' id="w31">俞老师你真美</div>
                                <div class='w' id="w32">祝俞老师开心每一天</div>
                                <div class='w' id="w33">祝俞老师教师节快乐</div>
                                <div class='w' id="w34">祝俞老师永远十八岁</div>
                                <div class='w' id="w35">祝俞老师越来越美</div>
                                <div class='w' id="w36">祝俞老师身体健康</div>
                                <div class='w' id="w37">俞老师天生丽质</div>
                                <div class='w' id="w38">俞老师美若天仙</div>
                                <div class='w' id="w39">俞老师美丽动人</div>
                                <div class='w' id="w40">俞老师蕙质兰心</div>
                                <div class='w' id="w41">俞老师你真美</div>
                                <div class='w' id="w42">祝俞老师开心每一天</div>
                                <div class='w' id="w43">祝俞老师教师节快乐</div>
                                <div class='w' id="w44">祝俞老师永远十八岁</div>
                                <div class='w' id="w45">祝俞老师越来越美</div>
                                <div class='w' id="w46">祝俞老师身体健康</div>
                                <div class='w' id="w47">俞老师天生丽质</div>
                                <div class='w' id="w48">俞老师美若天仙</div>
                                <div class='w' id="w49">俞老师美丽动人</div>
                                <div class='w' id="w50">俞老师蕙质兰心</div>`
}
function wd(){
    document.body.innerHTML = `<div class="photo">
                                    <video src="../video/95e5ef2c7d1c4acfcce0caedbebf231d.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/大张伟 - 我怎么这么好看.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">王堤老师你真美</div>
                                <div class='w' id="w2">祝王堤老师开心每一天</div>
                                <div class='w' id="w3">祝王堤老师教师节快乐</div>
                                <div class='w' id="w4">祝王堤老师永远十八岁</div>
                                <div class='w' id="w5">祝王堤老师越来越美</div>
                                <div class='w' id="w6">祝王堤老师身体健康</div>
                                <div class='w' id="w7">王堤老师天生丽质</div>
                                <div class='w' id="w8">王堤老师美若天仙</div>
                                <div class='w' id="w9">王堤老师美丽动人</div>
                                <div class='w' id="w10">王堤老师蕙质兰心</div>
                                <div class='w' id="w11">王堤老师你真美</div>
                                <div class='w' id="w12">祝王堤老师开心每一天</div>
                                <div class='w' id="w13">祝王堤老师教师节快乐</div>
                                <div class='w' id="w14">祝王堤老师永远十八岁</div>
                                <div class='w' id="w15">祝王堤老师越来越美</div>
                                <div class='w' id="w16">王堤老师天生丽质</div>
                                <div class='w' id="w17">王堤老师美若天仙</div>
                                <div class='w' id="w18">王堤老师美丽动人</div>
                                <div class='w' id="w19">王堤老师蕙质兰心</div>
                                <div class='w' id="w20">祝王堤老师开心每一天</div>
                                <div class='w' id="w21">王堤老师你真美</div>
                                <div class='w' id="w22">祝王堤老师教师节快乐</div>
                                <div class='w' id="w23">祝王堤老师永远十八岁</div>
                                <div class='w' id="w24">祝王堤老师越来越美</div>
                                <div class='w' id="w25">祝王堤老师身体健康</div>
                                <div class='w' id="w26">王堤老师天生丽质</div>
                                <div class='w' id="w27">王堤老师美若天仙</div>
                                <div class='w' id="w28">王堤老师美丽动人</div>
                                <div class='w' id="w29">王堤老师蕙质兰心</div>
                                <div class='w' id="w30">祝王堤老师开心每一天</div>
                                <div class='w' id="w31">王堤老师你真美</div>
                                <div class='w' id="w32">祝王堤老师开心每一天</div>
                                <div class='w' id="w33">祝王堤老师教师节快乐</div>
                                <div class='w' id="w34">祝王堤老师永远十八岁</div>
                                <div class='w' id="w35">祝王堤老师越来越美</div>
                                <div class='w' id="w36">祝王堤老师身体健康</div>
                                <div class='w' id="w37">王堤老师天生丽质</div>
                                <div class='w' id="w38">王堤老师美若天仙</div>
                                <div class='w' id="w39">王堤老师美丽动人</div>
                                <div class='w' id="w40">王堤老师蕙质兰心</div>
                                <div class='w' id="w41">王堤老师你真美</div>
                                <div class='w' id="w42">祝王堤老师开心每一天</div>
                                <div class='w' id="w43">祝王堤老师教师节快乐</div>
                                <div class='w' id="w44">祝王堤老师永远十八岁</div>
                                <div class='w' id="w45">祝王堤老师越来越美</div>
                                <div class='w' id="w46">祝王堤老师身体健康</div>
                                <div class='w' id="w47">王堤老师天生丽质</div>
                                <div class='w' id="w48">王堤老师美若天仙</div>
                                <div class='w' id="w49">王堤老师美丽动人</div>
                                <div class='w' id="w50">王堤老师蕙质兰心</div>`
}

function zxy(){
    document.body.innerHTML = `<div class="photo">
                                    <video src="../video/95e5ef2c7d1c4acfcce0caedbebf231d.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/大张伟 - 我怎么这么好看.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">张鑫雨老师你真美</div>
                                <div class='w' id="w2">祝张鑫雨老师开心每一天</div>
                                <div class='w' id="w3">祝张鑫雨老师教师节快乐</div>
                                <div class='w' id="w4">祝张鑫雨老师永远十八岁</div>
                                <div class='w' id="w5">祝张鑫雨老师越来越美</div>
                                <div class='w' id="w6">祝张鑫雨老师身体健康</div>
                                <div class='w' id="w7">张鑫雨老师天生丽质</div>
                                <div class='w' id="w8">张鑫雨老师美若天仙</div>
                                <div class='w' id="w9">张鑫雨老师美丽动人</div>
                                <div class='w' id="w10">张鑫雨老师蕙质兰心</div>
                                <div class='w' id="w11">张鑫雨老师你真美</div>
                                <div class='w' id="w12">祝张鑫雨老师开心每一天</div>
                                <div class='w' id="w13">祝张鑫雨老师教师节快乐</div>
                                <div class='w' id="w14">祝张鑫雨老师永远十八岁</div>
                                <div class='w' id="w15">祝张鑫雨老师越来越美</div>
                                <div class='w' id="w16">张鑫雨老师天生丽质</div>
                                <div class='w' id="w17">张鑫雨老师美若天仙</div>
                                <div class='w' id="w18">张鑫雨老师美丽动人</div>
                                <div class='w' id="w19">张鑫雨老师蕙质兰心</div>
                                <div class='w' id="w20">祝张鑫雨老师开心每一天</div>
                                <div class='w' id="w21">张鑫雨老师你真美</div>
                                <div class='w' id="w22">祝张鑫雨老师教师节快乐</div>
                                <div class='w' id="w23">祝张鑫雨老师永远十八岁</div>
                                <div class='w' id="w24">祝张鑫雨老师越来越美</div>
                                <div class='w' id="w25">祝张鑫雨老师身体健康</div>
                                <div class='w' id="w26">张鑫雨老师天生丽质</div>
                                <div class='w' id="w27">张鑫雨老师美若天仙</div>
                                <div class='w' id="w28">张鑫雨老师美丽动人</div>
                                <div class='w' id="w29">张鑫雨老师蕙质兰心</div>
                                <div class='w' id="w30">祝张鑫雨老师开心每一天</div>
                                <div class='w' id="w31">张鑫雨老师你真美</div>
                                <div class='w' id="w32">祝张鑫雨老师开心每一天</div>
                                <div class='w' id="w33">祝张鑫雨老师教师节快乐</div>
                                <div class='w' id="w34">祝张鑫雨老师永远十八岁</div>
                                <div class='w' id="w35">祝张鑫雨老师越来越美</div>
                                <div class='w' id="w36">祝张鑫雨老师身体健康</div>
                                <div class='w' id="w37">张鑫雨老师天生丽质</div>
                                <div class='w' id="w38">张鑫雨老师美若天仙</div>
                                <div class='w' id="w39">张鑫雨老师美丽动人</div>
                                <div class='w' id="w40">张鑫雨老师蕙质兰心</div>
                                <div class='w' id="w41">张鑫雨老师你真美</div>
                                <div class='w' id="w42">祝张鑫雨老师开心每一天</div>
                                <div class='w' id="w43">祝张鑫雨老师教师节快乐</div>
                                <div class='w' id="w44">祝张鑫雨老师永远十八岁</div>
                                <div class='w' id="w45">祝张鑫雨老师越来越美</div>
                                <div class='w' id="w46">祝张鑫雨老师身体健康</div>
                                <div class='w' id="w47">张鑫雨老师天生丽质</div>
                                <div class='w' id="w48">张鑫雨老师美若天仙</div>
                                <div class='w' id="w49">张鑫雨老师美丽动人</div>
                                <div class='w' id="w50">张鑫雨老师蕙质兰心</div>`
}
