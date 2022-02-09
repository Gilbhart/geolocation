// ボタン押下時処理。
document.getElementById("button").onclick = function(){
    // 位置情報を取得する。
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};

// 位置情報の取得に成功。
function successCallback(position){
// 緯度を取得、表示。
    let latitude = position.coords.latitude;
    document.getElementById("latitude").innerHTML = latitude;
// 経度を取得、表示。
    let longitude = position.coords.longitude;
    document.getElementById("longitude").innerHTML = longitude;
// 高度を取得、表示。
    let altitude = position.coords.altitude;
    document.getElementById("altitude").innerHTML = altitude;
// 位置情報の取得結果を表示。
    document.getElementById("result").innerHTML = "位置情報の取得に成功！";
};

// 位置情報の取得に失敗。
function errorCallback(error){
    let error_msg = "";
    switch(error.code)
    {
      case 1:
        error_msg = "位置情報の利用が許可されていません！";
        break;
      case 2:
        error_msg = "デバイスの位置が判定できません！";
        break;
      case 3:
        error_msg = "タイムアウトしました！";
        break;
    }
// 位置情報の取得結果を表示
    document.getElementById("result").innerHTML = error_msg;
};