const { smartboat } = require('./dist/index.js');

function generateSampleGpsPoints(count) {
  const points = [];
  const baseLat = 10.762622;
  const baseLng = 106.660172;
  const now = Date.now();

  for (let i = 0; i < count; i++) {
    points.push({
      latitude: baseLat + i * 0.0001,
      longitude: baseLng + i * 0.0001,
      speed: 8.5 + (i % 3) * 0.5,
      heading: (180 + i) % 360,
      recordedAt: now - (count - i) * 60000,
      accuracy: 5.0,
      batteryLevel: 95,
      status: 1,
    });
  }
  return points;
}

function runBenchmark() {
  const count = 200;
  const points = generateSampleGpsPoints(count);

  const batchPayload = {
    shipId: 1024,
    seaTripId: 5882,
    points,
    deviceId: 'DEV-SMARTBOAT-V4-001',
  };

  // 1. JSON Payload
  const jsonString = JSON.stringify(batchPayload);
  const jsonBytes = Buffer.byteLength(jsonString, 'utf8');

  // 2. Protobuf Binary Payload
  const protoMessage = smartboat.telemetry.GpsBatchRequest.create(batchPayload);
  const protoBinary = smartboat.telemetry.GpsBatchRequest.encode(protoMessage).finish();
  const protoBytes = protoBinary.length;

  const reduction = (((jsonBytes - protoBytes) / jsonBytes) * 100).toFixed(2);

  console.log('================================================================');
  console.log(`📊 BENCHMARK SO SÁNH DUNG LƯỢNG GPS BATCH (${count} ĐIỂM TOẠ ĐỘ)`);
  console.log('================================================================');
  console.log(`- Dung lượng JSON thô:         ${jsonBytes.toLocaleString()} bytes (~${(jsonBytes / 1024).toFixed(2)} KB)`);
  console.log(`- Dung lượng Protobuf Binary:  ${protoBytes.toLocaleString()} bytes (~${(protoBytes / 1024).toFixed(2)} KB)`);
  console.log(`- Tỷ lệ giảm kích thước:       ${reduction}%`);
  console.log(`- Băng thông tiết kiệm được:   ${(jsonBytes - protoBytes).toLocaleString()} bytes mỗi lượt sync`);
  console.log('================================================================');
}

runBenchmark();
