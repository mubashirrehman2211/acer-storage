import {setInterval} from "#app/compat/interval.js";

export const useProductStore = defineStore('product', {
    state: () => ({
        selectedImage: 1,
        animateInterval: null,
        animateInterval1: null,
        animateInterval2: null,

        productOptions: [
            'PCIE M.2 SSD',
            'SATA 2.5" SSD',
            'SATA M.2" SSD',
            'MEMORY',
            'MEMORY CARD',
            'USB FLASH DRIVE'
        ],

        supportOptions: [
            'MANUALS & TOOLS',
            'WARRANTY POLICY',
            'ACRONIS DOWNLOAD',
            'FAQ'
        ],

        aboutOptions: [
            'ACER STORAGE',
            'NEWS',
            'REVIEWS',
            'CONTACT'
        ],

        indexCard: {
            img1: '/Products-Image/1.jpg',

            img2:
                '/Products-Image/2.jpg',

            img3:
                '/Products-Image/3.png',

            img4:
                '/Products-Image/4.png',

            img5:
                '/Products-Image/5.jpg',

            img6:
                '/Products-Image/6.jpg',

            title1:
                'Acer UD200 DDR5 Desktop Memory',

            title2:
                'Acer SD200 Laptop DRAM',

            title3:
                'Acer FA200 PCle M.2 SSD',

            title4:
                'Acer UM310 USB Flash Drive',

            title5:
                'Acer MSC300 MicroSD Card',

            title6:
                'Acer UP300 USB Flash Drive',

            listNo1:
                [
                    'Unleash speeds up to 5600 MHz',
                    'Elevate stability with On-Die ECC',
                    'Power management IC (PMIC)'
                ],
            listNo2:
                [
                    'Faster Load Times and File Transfers',
                    'Improved Stability with On-Die ECC',
                    'Optimized Power Effciency'
                ],
            listNo3:
                [
                    'PCle Gen 4 x4, NVMe 2.0',
                    'Speeds up to 7200 MB/s',
                    'PS5 compatible'
                ],
            listNo4:
                ['Up to 120 MB/s read',
                    'Storage on the go',
                    'Rock-solid durability'
                ],
            listNo5:
                [
                    'Supports V30 and 4k',
                    'UHS-I standard',
                    'Read at speeds up to 160 MB/s'
                ],
            listNo6:
                ['Up to 120 MB/s read speed',
                    'Premium controller and ICs',
                    'Choice of three colors'
                ],
        },

        newsCard: {
            img1: '/News-Image/1.jpg',

            img2:
                '/News-Image/2.jpg',

            img3:
                '/News-Image/3.jpg',

            title1:
                'Acer FA200 SSD: Elevate Your Digital Experience',

            title2:
                'Acer Extends Its High-performance SD Memory Card Lineup with News...',


            title3:
                'Acer Unveils New SC300 High-speed SD Card Optimized For 4K Videos...',

            paraNo1:
                'Acer FA200 SSD brings faster read and write speeds - 7200 MB/s and 6200 MB/s - providing a superior experience for users',

            paraNo2:
                'Featuring fast read and write speeds of up to 160 MB/s and 120 MB/s respectively, Acer MSC300 MicroSD card enhances your mobile experience on your smartphone, tablet and other...',

            paraNo3:
                'To meet the demands of adventurers who always seek the perfect moment to capture, the new Acer SC300 SD card offers exceptional performance for smooth and reliable burst...',
        },

        baseProducts: {
            img1: '/Products-Image/1.jpg',

            img2:
                '/Products-Image/2.jpg',

            img3:
                '/Products-Image/3.png',

            img4:
                '/Products-Image/4.png',

            img5:
                '/Products-Image/5.jpg',

            img6:
                '/Products-Image/6.jpg',

            img7:
                '/Products-Image/7.jpg',

            img8:
                '/Products-Image/8.jpg',

            img9:
                '/Products-Image/9.jpg',

            img10:
                '/Products-Image/10.jpg',

            img11:
                '/Products-Image/11.jpg',

            img12:
                '/Products-Image/12.png',

            img13:
                '/Products-Image/13.jpg',

            img14:
                '/Products-Image/14.jpg',

            img15:
                '/Products-Image/15.jpg',

            img16:
                '/Products-Image/17.png',

            img17:
                '/Products-Image/18.png',

            img18:
                '/Products-Image/19.jpg',

            img19:
                '/Products-Image/20.png',

            title1:
                'Acer UD200 DDR5 Desktop Memory',

            title2:
                'Acer SD200 Laptop DRAM',

            title3:
                'Acer FA200 PCle M.2 SSD',

            title4:
                'Acer UM310 USB Flash Drive',

            title5:
                'Acer MSC300 MicroSD Card',

            title6:
                'Acer MSC300 MicroSD Card',

            title7:
                'Acer RE100 2.5" SATA III SSD',

            title8:
                'Acer FA100 M.2 PCIe NVMe SSD',

            title9:
                'Acer SA100 2.5" SATA lll SSD',

            title10:
                'Acer UD100 Desktop DRAM',

            title11:
                'Acer UD100 Desktop DRAM',

            title12:
                'Acer RE100 M.2 SSD',

            title13:
                'Acer CF100 Memory Card',

            title14:
                'Acer CFexpress™ Type B Card CFE100',

            title15:
                'Acer HT100 Desktop DRAM',

            title16:
                'Acer UF300 USB Flash Drive',

            title17:
                'Acer UF200 USB Flash Drive',

            title18:
                'Acer UP200 USB Flash Drive',

            title19:
                'Acer SC300 SD Card',

        }
    }),
    getters: {}
    ,
    actions: {
        nextSlide(img) {
            this.selectedImage = img
            window.clearInterval(this.animateInterval)
            this.animateSlide()
        }
        ,

        animateSlide() {
            this.animateInterval = setInterval(() => {
                if (this.selectedImage === 1) return this.selectedImage = 2
                if (this.selectedImage === 2) return this.selectedImage = 3
                if (this.selectedImage === 3) return this.selectedImage = 1
            }, 5000)
        }
        ,


    }
})
