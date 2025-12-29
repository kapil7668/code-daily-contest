const CONTESTS = [
    // FREE CONTESTS
    { 
        id: 'free-daily', 
        name: 'Free Daily Rush', 
        fee: 0, 
        minEntries: 100, 
        totalPrize: 1000, 
        prizes: [1000],
        color: 'emerald',
        description: 'Min 100 participants • 1st wins ₹1000'
    },
    { 
        id: 'free-mega', 
        name: 'Free Mega Contest', 
        fee: 0, 
        minEntries: 100, 
        totalPrize: 2500, 
        prizes: [2500],
        color: 'cyan',
        description: 'Min 100 participants • 1st wins ₹2500'
    },

    // PAID CONTESTS
    { 
        id: 'quick-9', 
        name: '₹9 Quick Rush', 
        fee: 9, 
        minEntries: 100, 
        totalPrize: 540, 
        prizes: [200,175,165],
        color: 'orange',
        description: 'Top 3 prizes • Min 100 participants'
    },
    { 
        id: 'pro-49', 
        name: '₹49 Pro Rush', 
        fee: 49, 
        minEntries: 100, 
        totalPrize: 2940, 
        prizes: [1500,400,250,200,150,100,100,100,100,100],
        color: 'amber',
        description: 'Top 10 prizes • Min 100 participants'
    },
    { 
        id: 'elite-149', 
        name: '₹149 Elite Rush', 
        fee: 149, 
        minEntries: 150, 
        totalPrize: 13410, 
        prizes: [4000,2000,1000,700,500,400,350,300,250,200,175,150,150,125,125,100,100,100,100,100],
        color: 'purple',
        description: 'Top 20 prizes • Min 150 participants'
    },
    { 
        id: 'champion-199', 
        name: '₹199 Champion', 
        fee: 199, 
        minEntries: 200, 
        totalPrize: 23880, 
        prizes: [6000,3000,1500,1000,800,700,600,500,450,400,350,300,250,225,200,175,150,150,125,125],
        color: 'pink',
        description: 'Top 20 prizes • Min 200 participants'
    },
    { 
        id: 'mega-99', 
        name: '₹99 MEGA (Top 100)', 
        fee: 99, 
        minEntries: 500, 
        totalPrize: 29700, 
        prizes: [10000,5000,800,600,400,400,400,400,400,400,250,250,250,250,250,250,250,250,200,200,200,200,200,200,200,200,200,200,200,200,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100],
        color: 'indigo',
        description: 'Top 100 prizes • Min 500 participants'
    }
];
