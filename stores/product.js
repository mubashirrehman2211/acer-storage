import {setInterval} from "#app/compat/interval.js";


export const useProductStore = defineStore("product", {
    state: () => ({
        selectedImage: 1,
        animateInterval: null,
        animateInterval1: null,
        animateInterval2: null,
        selectedScrollImage: 1,
        selectedProduct: null,
        indexProductArray: null,
        toggleSearch: false,
        searchValue: null,
        searchedArray: null,
        selectItem: null,
        p: null,
        relatedProduct: null,
        pressBtn: null,

        productOptions: ["PCIE M.2 SSD", 'SATA 2.5" SSD', 'SATA M.2" SSD', "MEMORY", "MEMORY CARD", "USB FLASH DRIVE"],

        selectOptions: ['ALL', "PCIE M.2 SSD", 'SATA 2.5" SSD', 'SATA M.2" SSD', "MEMORY", "MEMORY CARD", "USB FLASH DRIVE"],

        supportOptions: ["MANUALS & TOOLS", "WARRANTY POLICY", "ACRONIS DOWNLOAD", "FAQ"],

        aboutOptions: ["ACER STORAGE", "NEWS", "REVIEWS", "CONTACT"],

        newsCard: {
            img1: "/News-Image/1.jpg",

            img2: "/News-Image/2.jpg",

            img3: "/News-Image/3.jpg",

            title1: "Acer FA200 SSD: Elevate Your Digital Experience",

            title2: "Acer Extends Its High-performance SD Memory Card Lineup with News...",

            title3: "Acer Unveils New SC300 High-speed SD Card Optimized For 4K Videos...",

            paraNo1: "Acer FA200 SSD brings faster read and write speeds - 7200 MB/s and 6200 MB/s - providing a superior experience for users",

            paraNo2: "Featuring fast read and write speeds of up to 160 MB/s and 120 MB/s respectively, Acer MSC300 MicroSD card enhances your mobile experience on your smartphone, tablet and other...",

            paraNo3: "To meet the demands of adventurers who always seek the perfect moment to capture, the new Acer SC300 SD card offers exceptional performance for smooth and reliable burst...",
        },

        productArray: [{
            id: 1,
            img: "/Products-Image/1.jpg",
            title: "Acer UD200 DDR5 Desktop Memory",
            list: ['Unleash speeds up to 5600 MHz', 'Elevate stability with On-Die ECC', 'Power management IC (PMIC)'],
        },

            {
                id: 2,
                img: "/Products-Image/2.jpg",
                title: "Acer SD200 Laptop DRAM",
                list: ['Faster Load Times and File Transfers', 'Improved Stability with On-Die ECC', 'Optimized Power Effciency'],
            },

            {
                id: 3,
                img: "/Products-Image/3.png",
                title: "Acer FA200 PCle M.2 SSD",
                list: ['PCle Gen 4 x4, NVMe 2.0', 'Speeds up to 7200 MB/s', 'PS5 compatible'],
            },

            {
                id: 4,
                img: "/Products-Image/4.png",
                title: "Acer UM310 USB Flash Drive",
                list: ['Up to 120 MB/s read', 'Storage on the go', 'Rock-solid durability'],
            },

            {
                id: 5,
                img: "/Products-Image/5.jpg",
                title: "Acer MSC300 MicroSD Card",
                list: ['Supports V30 and 4k', 'UHS-I standard', 'Read at speeds up to 160 MB/s'],
            },

            {
                id: 6,
                img: "/Products-Image/6.jpg",
                title: "Acer MSC300 MicroSD Card",
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },

            {
                id: 7,
                img: "/Products-Image/7.jpg",
                title: 'Acer RE100 2.5" SATA III SSD',
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },

            {
                id: 8,
                img: "/Products-Image/8.jpg",
                title: "Acer FA100 M.2 PCIe NVMe SSD",
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },

            {
                id: 9,
                img: "/Products-Image/9.jpg",
                title: 'Acer SA100 2.5" SATA lll SSD',
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },

            {
                id: 10,
                img: "/Products-Image/10.jpg",
                title: "Acer UD100 Desktop DRAM",
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },

            {
                id: 11,
                img: "/Products-Image/11.jpg",
                title: "Acer UD100 Desktop DRAM",
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },

            {
                id: 12,
                img: "/Products-Image/12.png",
                title: "Acer RE100 M.2 SSD",
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },

            {
                id: 13,
                img: "/Products-Image/13.jpg",
                title: "Acer CF100 Memory Card",
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },

            {
                id: 14,
                img: "/Products-Image/14.jpg",
                title: "Acer CF200 Memory Card ",
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },

            {
                id: 15,
                img: "/Products-Image/15.jpg",
                title: "Acer HT100 Desktop DRAM",
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },

            {
                id: 16,
                img: "/Products-Image/17.png",
                title: "Acer UF300 USB Flash Drive",
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },

            {
                id: 17,
                img: "/Products-Image/18.png",
                title: "Acer UF200 USB Flash Drive",
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },

            {
                id: 18,
                img: "/Products-Image/19.jpg",
                title: "Acer UP200 USB Flash Drive",
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },

            {
                id: 19,
                img: "/Products-Image/20.png",
                title: "Acer SC300 SD Memory Card",
                list: ['Up to 120 MB/s read speed', 'Premium controller and ICs', 'Choice of three colors'],
            },],
    }),

    getters: {

        // SEARCH BY TITLE

        resultedArray() {
            if (this.selectedProduct === 'ALL') return this.productArray;

            if (this.selectedProduct) {
                return this.productArray.filter((item) => {
                    return this.selectedProduct
                        .toUpperCase()
                        .split(" ")
                        .every((v) => item.title.toUpperCase().includes(v));
                });
            } else {
                return this.productArray
            }
        },

        // SEARCH BY WORD


        searchArray() {
            if (this.searchValue) {
                return this.productArray.filter((item) => {
                    return this.searchValue
                        .toUpperCase()
                        .split(" ")
                        .every((v) => item.title.toUpperCase().includes(v));
                });
            }
        },
    },

    actions: {
        nextSlide(img) {
            this.selectedImage = img;
            window.clearInterval(this.animateInterval);
            this.animateSlide();
        },

        animateSlide() {
            this.animateInterval = setInterval(() => {
                if (this.selectedImage === 1) return (this.selectedImage = 2);
                if (this.selectedImage === 2) return (this.selectedImage = 3);
                if (this.selectedImage === 3) return (this.selectedImage = 1);
            }, 5000);
        },

        reloadIndexProduct() {
            this.indexProductArray = this.productArray
            this.indexProductArray = this.indexProductArray.slice(0, 6)

        },

        findProduct() {
            let route = useRoute()
            this.selectItem = route.params.id
            this.p = this.productArray.find((item) => item.title === this.selectItem)
            console.log('p', this.p)
        },

        filterProduct() {
            this.relatedProduct = this.productArray.filter((item) => item.type === this.p?.type)
            this.relatedProduct = this.relatedProduct?.slice(0, 3)
        },
    },
});
