// 2桁にゼロ埋めする処理
const padZero = num => String(num).padStart(2, '0');

// 時刻の取得
const updateClock = () => {
	const now = new Date();
	const hour = padZero(now.getHours());
	const minute = padZero(now.getMinutes());
	const second = padZero(now.getSeconds());
	const currentTime = `今の時間は${hour}時${minute}分${second}秒`;
	document.getElementById("time").textContent = currentTime;
};

// 初回実行と１秒ごとの更新
updateClock();
setInterval(updateClock, 1000);