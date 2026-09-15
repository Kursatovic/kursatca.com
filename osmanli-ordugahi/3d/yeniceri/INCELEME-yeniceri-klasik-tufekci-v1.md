# Yeniçeri klasik tüfekçi v1 — model incelemesi

İnceleme tarihi: 10 Eylül 2026

## Sonuç

Model ilk web prototipinde kullanılabilir. GLB 2.0 yapısı sağlamdır ve üç doku dosyası modelin içine gömülüdür. Bununla birlikte 189.284 üçgen, tek ekranda yalnızca bir asker gösterilecekse kabul edilebilir; çok sayıda askeri aynı anda yükleyecek nihai uygulama için ağırdır.

## Teknik bulgular

- Dosya: `yeniceri-klasik-tufekci-1550-1600-v1.glb`
- Boyut: 6.230.152 bayt (yaklaşık 5,94 MiB)
- Üretici: Tripo
- Sahne / düğüm / mesh: 1 / 1 / 1
- Geometri: 103.569 köşe, 189.284 üçgen
- Primitive: 1, indeksli
- Malzeme: 1
- Doku: 3 adet, tamamı gömülü JPEG
- Dış dosya bağımlılığı: yok
- İskelet / animasyon: yok
- Model sınırı: yaklaşık 0,495 × 1,000 × 0,269 birim
- Zorunlu GLTF uzantısı: yok

## Ürün açısından değerlendirme

**Uygun:** Tek karakterli 3D inceleme ekranı, döndürme, yakınlaştırma ve koordinata bağlı bilgi noktaları.

**Sınırlı:** Tüfek, kılıç, başlık ve keseleri ayrı nesne gibi seçme/gizleme. Model tek mesh olduğu için parçalar doğrudan nesne kimliğiyle seçilemez. İlk sürümde görünmez koordinat işaretleri kullanılmalıdır.

**Ağır:** Haritada çok sayıda karakteri eş zamanlı göstermek. Böyle bir kullanımda daha sonra 40–80 bin üçgenlik optimize bir kopya üretilmelidir. Mevcut yüksek ayrıntılı model arşivlenmeli, üzerine yazılmamalıdır.

## Görsel kontrol listesi

Uygulamaya almadan önce model 360 derece döndürülerek şu bölgeler denetlenmelidir:

1. Sağ el parmaklarının tüfekle kaynaşıp kaynaşmadığı.
2. Tüfeğin çakmak/fitil mekanizmasının okunabilirliği ve namlu doğruluğu.
3. Börkün arka kısmında kâğıt inceliği, boşluk veya erime bulunup bulunmadığı.
4. Kılıç, kın ve kemerin bedene gömülüp gömülmediği.
5. İki ayağın tabana düzgün basması ve giysinin bacakların arasında zar oluşturmaması.
6. Sırt dokusunun ön yüz kadar tamamlanmış olup olmadığı.

## Tarihsel sunum etiketi

Bu model, `1550–1600 klasik dönem yeniçeri tüfekçisi için güçlü rekonstrüksiyon` şeklinde etiketlenmelidir. Belirli bir minyatürün veya müze mankeninin birebir kopyası olduğu ileri sürülmemelidir.
