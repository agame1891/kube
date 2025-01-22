import React from 'react'
import wisata from './Wisata.gif'

const about = () => {
  return (
    <>
        <section id="tentang">
            <div class="tentang container">
                <div class="tentang-header">
                    <h1 class="section-title">Tentang <span>Pariwisata</span></h1>
                </div>
                <div class="all-tentang">
                    <div class="tentang-item">
                        <div class="tentang-info">
                        <h1>Wisata</h1>
                        <h2>Pengertian Pariwisata</h2>
                        <p>Pariwisata adalah rangkaian aktivitas dan kegiatan perjalanan yang dilakukan oleh perorangan, kelompok atau keluarga ke suatu tempat secara sementara dengan tujuan mencari ketenangan, kedamaian, keseimbangan, keserasian dan kebahagiaan jiwa. Pariwisata didukung berbagai fasilitas serta layanan yang disediakan oleh masyarakat, pengusaha, pemerintah dan pemerintah daerah.</p>
                        <h2>Pariwisata</h2>
                        <p>Pariwisata merupakan fenomena kebutuhan akan kesehatan dan pergantian suasana, penilaian yang sadar dan menumbuhkan (cinta) terhadap keindahan alam dan khususnya bertambahnya pergaulan berbagai bangsa dan kelas masyarakat. Pariwisata adalah kegiatan seseorang yang bepergian atau tinggal di suatu tempat di luar lingkungannya yang biasa dalam waktu tidak lebih dari satu tahun secara terus menerus, untuk kesenangan, bisnis ataupun tujuan lainnya.</p>
                        </div>
                        <div class="tentang-img">
                            <img src={wisata} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default about