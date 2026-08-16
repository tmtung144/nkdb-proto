# @nkdb/proto

Shared Protocol Buffers Schemas & Generated TypeScript Definitions for **SmartBoat 4.0 (NKDB)**.

## 📦 Cấu trúc Schema

- `proto/telemetry.proto`: GPS Telemetry, batch sync, toạ độ trực tiếp và giám sát hành trình.
- `proto/sync_logs.proto`: Nhật ký khai thác hải sản, mẻ lưới và nhật ký thu mua / chuyển tải.
- `proto/zone.proto`: Đa giác vùng cấm đánh bắt, khu bảo tồn và ranh giới biển.

## 🛠️ Lệnh Build

```bash
# Cài đặt dependencies
pnpm install

# Biên dịch Proto sang TypeScript & JS
pnpm run build
```

## 🚀 Sử dụng

```ts
import { smartboat } from '@nkdb/proto';

// Tạo và mã hoá GPS Point
const point = smartboat.telemetry.GpsPoint.create({
  latitude: 10.762622,
  longitude: 106.660172,
  recordedAt: Date.now(),
  status: 1,
});

const binary = smartboat.telemetry.GpsPoint.encode(point).finish();

// Giải mã
const decoded = smartboat.telemetry.GpsPoint.decode(binary);
```
