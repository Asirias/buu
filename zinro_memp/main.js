function chack_functions(source) {
	var propNames = new Array();
	var o = source;
	while (o) {
		propNames = propNames.concat(Object.getOwnPropertyNames(o));
		o = Object.getPrototypeOf(o);
	}
	console.log(propNames);
}
var addmembid = new Array();
window.onload = function()
{
	$('#addc').change(function() {
		var val = parseInt($('#addc').val(), 10);
		if (val) {
			for (var i = 0; i < val; i++) {
				var addid = 'char' + i;
				let c = "<input type='text' id =" + addid + "><select class=" + addid + " onChange='nameadd()'><option value='0'>0人</option><option value='1'>1人</option><option value='2'>2人</option><option value='3'>3人</option><option value='4'>4人</option></select><br>";
				addmembid.push(addid);
				$('#chars').append(c);
			}
		}
	});
	/*$(".lined").on('keydown', function(event) {
	   const RETURN_KEY_CODE = 13;
	   if (event.which == RETURN_KEY_CODE) {
	   // your code here ...
	   	localStorage.removeItem("foo");
	localStorage.setItem("foo","bar");
	localStorage.getItem("foo");
	localStorage.clear();
	 }
	});*/
	nameadd();
};

function shuffle(array) {
	var n = array.length,
		t, i;
	while (n) {
		i = Math.floor(Math.random() * n--);
		t = array[n];
		array[n] = array[i];
		array[i] = t;
	}
}
var playersName = new Array();
var ur_res = new Array();

var sum_pep = 0;
var $selec_tag = '';

function nameadd() {
	var memb_t_list = ['アンナ', 'エマ', 'エリック', 'サンドラ', 'ショーン', 'スーザン', 'トーマス', 'ヒュー', 'フェイ', 'フランク', 'マイク', 'ミカ', 'メアリー', 'メリル', 'リリアン', 'ロディ', 'ローラ', 'ゲイル', 'ジェイ', 'ジェシカ', 'バニラ', 'ビル'];

	sum_pep = 0;
	var citizen = parseInt($('#citizen').val(), 10);
	if (citizen > 0) sum_pep += citizen;
	var pwolf = parseInt($('#pwolf').val(), 10);
	if (pwolf > 0) sum_pep += pwolf;
	var madman = parseInt($('#madman').val(), 10);
	if (madman > 0) sum_pep += madman;
	var fanatic = parseInt($('#fanatic').val(), 10);
	if (fanatic > 0) sum_pep += fanatic;
	var fox = parseInt($('#fox').val(), 10);
	if (fox > 0) sum_pep += fox;
	var fortune_teller = parseInt($('#fortune_teller').val(), 10);
	if (fortune_teller > 0) sum_pep += fortune_teller;
	var spiritual_ability = parseInt($('#spiritual_ability').val(), 10);
	if (spiritual_ability > 0) sum_pep += spiritual_ability;
	var hunter = parseInt($('#hunter').val(), 10);
	if (hunter > 0) sum_pep += hunter;
	var share = parseInt($('#share').val(), 10);
	if (share > 0) sum_pep += share;
	var cat = parseInt($('#cat').val(), 10);
	if (cat > 0) sum_pep += cat;
	var bakery = parseInt($('#bakery').val(), 10);
	if (bakery > 0) sum_pep += bakery;
	var chars = new Array();
	if (addmembid) {
		for (var i = 0; i < addmembid.length; i++) {
			var v = parseInt($('.' + addmembid[i]).val(), 10);
			if (v) {
				chars.push(v);
				sum_pep += v;
			}
		}
	}

	playersName.length = 0;
	$('#name').empty();
	for (var i = 0; i < sum_pep; i++) {
		var addid = 'player' + i;
		var men = memb_t_list[i] ? memb_t_list[i] : "";
		$('#name').append("<input type='text' value=" + men + " id =" + addid + " ><br>");
		if (men != "") {
			playersName.push(men);
			ur_res.push('');
		}
		$('#' + addid).focusout(function(e) {
			$(this).css('background-color', '#fff');
		}).focusin(function(e) {
			$(this).css('background-color', '#ffc');
			$selec_tag = $(this);
			$('#playername').html($selec_tag.val());
		});
	}
}

function namechange() {
	if ($selec_tag != '') $selec_tag.val($('#namelist').val());
}
var yakusyoku_id = 'jgr';
var confirm_yakusyoku_id = 'confirmjgr';
var state_id = 'sta';
var suspicion_id = 'susp';
var yaku_list = new Array();
var colorid = 'getcolor';
function tadd() {
	for (var o = 0; o < playersName.length; o++) {
		var tr_id = playersName[o];
		var list = '<tr id=' + tr_id + '>';
		var name = tr_id;
		var position = "<select id=" + yakusyoku_id + ">";
		for (var i = 0; i < yaku_list.length; i++) position += "<option>" + yaku_list[i] + "</option>";
		position += "</select>";
		var tem_confirm = "<select id=" + confirm_yakusyoku_id + ">";
		tem_confirm += "<option>未</option>";
		for (var i = 0; i < yaku_list.length; i++) tem_confirm += "<option>" + yaku_list[i] + "</option>";
		tem_confirm += "</select>";
		var state = "<select id=" + state_id + ">" + "<option>生存</option>" + "<option>吊死</option>" + "<option>志望吊死</option>" + "<option>噛死</option>" + "<option>道連れ死</option>" + "<option>謎死</option>" + "</select>";

		var color = "<div id=" + colorid + "></div>";
		
		list += '<th class="name">' + name + '</th>';
		list += '<th class="position">' + position + '</th>';
		list += '<th class="pos"></th>';
		list += '<th class="color">'+color+'</th>';
		
		list += '<th class="tem_confirm">' + tem_confirm + '</th>';
		list += '<th class="state">' + state + '</th>';

		list += '<th class="memo"><textarea></textarea></th>';
		list += '</tr>';
		$('#table').append(list);
		$('#'+tr_id).css('background-color', '#aaa');
	}
}
var day = 0;
function invertRgb(str_old_rgb) {
    var ary_rgb = str_old_rgb.match(/([0-9]+)/g);
    for (var i = 0; i < ary_rgb.length; i++) {
        ary_rgb[i] = 255 - ary_rgb[i];
    }
    return 'RGB(' + ary_rgb.join(',') + ')';
}
function changecolor()
{
	//文字色を反転させる。
    var old_color = $('body').css('color');
    var new_color = invertRgb(old_color);
    $('body').css('color', new_color);
 
    //背景色を反転させる。
    old_color = $('body').css('background-color');
    new_color = invertRgb(old_color);
    $('body').css('background-color', new_color);
}
function dayaf() {
	$('#content').html(++day + "日目");
		var count = 0;
		$("#table .color").each(function(){
			var hm = $(this).find('#'+colorid).html();
			if('#' + hm != '#'){
			ur_res[count] = hm;
			
			}
			count++;
		});
}

function start() {
	if ($selec_tag == '') {
		$('#logg').html('プレイヤー(あなた)は誰ですか?名前にフォーカスを当ててクリックで決定です。');
		$('#logg').css('color', '#f00');
		return;
	}
	$('#logg').html('');
	if ($('.sten').val() == '開始') {
		yaku_list.length = 0;
		var citizen = parseInt($('#citizen').val(), 10);
		if (citizen <= 0) {
			alert("市民が0ですよ");
		} else yaku_list.push('市民');
		var pwolf = parseInt($('#pwolf').val(), 10);
		if (pwolf <= 0) {
			alert("人狼は入れてください");
			return;
		} else yaku_list.push('人狼');
		var madman = parseInt($('#madman').val(), 10);
		if (madman > 0) yaku_list.push('狂人');
		var fanatic = parseInt($('#fanatic').val(), 10);
		if (fanatic > 0) yaku_list.push('狂信者');
		var fox = parseInt($('#fox').val(), 10);
		if (fox > 0) yaku_list.push('妖狐');
		var fortune_teller = parseInt($('#fortune_teller').val(), 10);
		if (fortune_teller > 0) yaku_list.push('占い師');
		var spiritual_ability = parseInt($('#spiritual_ability').val(), 10);
		if (spiritual_ability > 0) yaku_list.push('霊能');
		if (fortune_teller == 0 && spiritual_ability == 0) {
			alert("占い師か霊媒は入れてください");
			return;
		}
		var hunter = parseInt($('#hunter').val(), 10);
		if (hunter > 0) yaku_list.push('狩人');
		var share = parseInt($('#share').val(), 10);
		if (share % 2 != 0) {
			alert("共有が奇数なのはおかしいです");
			return;
		} else if (share > 0) yaku_list.push('共有');
		var cat = parseInt($('#cat').val(), 10);
		if (cat > 0) yaku_list.push('猫又');
		var bakery = parseInt($('#bakery').val(), 10);
		if (bakery > 0) yaku_list.push('パン屋');
		if (addmembid) {
			for (var i = 0; i < addmembid.length; i++) {
				var addmem = parseInt($('.' + addmembid[i]).val(), 10);
				if (addmem > 0) yaku_list.push($('#' + addmembid[i]).val());
			}
			addmembid = null;
		}
		day = 0;
		$('#content').html("始まり");
		tadd();
		$('#table .tem_confirm').change(function() {
				var ss = $(this).find("#" + confirm_yakusyoku_id).val();
				var vid = $(this).parent().attr('id');
				var color = '#aaa';
				switch (ss) {
					case '市民':
						color = '#eee';
						break;
					case '人狼':
						color = '#111';
						break;
					case '狂人':
						color = '#333';
						break;
					case '狂信者':
						color = '#222';
						break;
					case '妖狐':
						color = '#ff0';
						break;
					case '占い師':
						color = '#0f0';
						break;
					case '霊能':
						color = '#0ff';
						break;
					case '狩人':
						color = '#fff';
						break;
					case '共有':
						color = '#f00ff0';
						break;
					case '猫又':
						color = '#00f0ff';
						break;
					case 'パン屋':
						color = '#f00';
						break;
					default:
						break;
				}
				$('#' + vid).css('background-color', color);
			
		});
			$('#table .state').change(function() {
				var state = $(this).find('#'+state_id).val();
				var col = '';
				if(state != '生存')col = '#666';
				else col = '#fff';
				$(this).parent().find('.name').css('color', col);
			});
			$('#table .position').change(function() {
				var d =$(this).find('#'+yakusyoku_id).val();
				var $parid = $(this).parent().find('.pos');
				if(d == "占い師" || d == "霊能"){

				var tem = day + "<select class='res'>";
				tem += "<option></option>";
				for (var i = 0; i < playersName.length; i++) 
				tem += "<option>" + playersName[i] + "</option>";
				tem += "</select>";
				tem += "<select class='col'>";
				tem += "<option selected>白</option>";
				tem += "<option>黒</option>";
				tem += "</select>";
				$parid.append(tem + '<br>');
				
				}else $parid.empty();
			});
			$('#table .pos').change(function() {
				var res = "";
				
				for (var o = 0; o < playersName.length; o++) {
					$('#' + playersName[o] + " .color").find('#'+colorid).html(ur_res[o]);
				}
				$("#table .pos").each(function(){
				
				var $resval = "";
				if($(this).html()){
					
				var $name = $(this).parent().find('.name').text();
				
				$resval =$(this).find('.res').val();
				
				var $colval =$(this).find('.col').val();
				
				res = $name+">"+$colval+"<br>";
				
				if('#' + $resval != '#')
				$('#' + $resval + " .color").find('#'+colorid).append(res);
				}
			});
		});
			
		$('.sten').val('終了');
		$('#' + $selec_tag.val() + ' .name').css('color', '#f00');
	} else {
		$('.sten').val('開始');
		$('#table').empty();
		var list = '<tr><th colspan="7" id="content">list</th></tr><tr><th>名前</th><th>CO役職</th><th>占い,霊媒結果</th><th>受けた判定</th><th>仮確定役職</th><th>状態</th><th>メモ</th></tr>';
		$('#table').append(list);
	}
}
