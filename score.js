function evaluateScore(score) {
    if (score >= 90) return "Excellent";
    // 90点以上は“Excellent”
    if (score >= 70) return "Good";
    // 70点以上は"Good”
    if (score >= 50) return "Average";
    // 50点以上は“Average“
    else return "Poor";
    // 50未満は“Poor”
    // 可読性および修正しやすさの向上のためこの部分のみelseを残す
}