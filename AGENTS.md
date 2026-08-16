# AGENTS.md - Quy định Phát Triển Schema Protocol Buffers (`@nkdb/proto`)

Tài liệu này quy định các nguyên tắc thiết kế schema và quy trình cập nhật cho repository **`nkdb-proto`** của hệ sinh thái **SmartBoat 4.0 (NKDB)**.

---

## 1. Nguyên Tắc Thiết Kế Schema (.proto)

1. **Nguyên tắc Tương thích ngược (Backward Compatibility):**
   - **Tuyệt đối KHÔNG** thay đổi tag số thứ tự (`= 1;`, `= 2;`) hoặc kiểu dữ liệu của các trường đã tồn tại trong file `.proto`.
   - Các trường mới phải được thêm bằng tag số thứ tự tiếp theo.
   - Nếu bỏ trường cũ, dùng từ khóa `reserved` hoặc đánh dấu comment `deprecated`.
2. **Quy ước Đặt tên (Naming Conventions):**
   - **Tên Message:** PascalCase (ví dụ: `GpsPoint`, `FishingLogSync`).
   - **Tên Trường (Fields):** snake_case (ví dụ: `ship_id`, `recorded_at`, `battery_level`).
   - **Tên File:** snake_case (ví dụ: `telemetry.proto`, `sync_logs.proto`, `zone.proto`).

---

## 2. Quy Trình Cập Nhật & Build Mã Nguồn

Mỗi khi sửa đổi bất kỳ file `.proto` nào:

1. **Biên dịch mã JavaScript & TypeScript:**
   ```bash
   pnpm run build
   ```
2. **Kiểm tra file sinh ra:** Đảm bảo `dist/index.d.ts` và `dist/generated/proto.d.ts` được tạo đầy đủ.
3. **Commit & Push:** Đẩy cả mã nguồn và thư mục `dist/` lên nhánh `main`:
   ```bash
   git add . && git commit -m "feat(proto): cập nhật schema ..." && git push origin main
   ```
