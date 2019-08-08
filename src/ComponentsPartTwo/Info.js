module.exports = {
    infoForElements: [
        {
            number: 1,
            period: 1,
            symbol: 'H',
            atomic_mass: 1.008,
            name: 'Hydrogen',
            image: 'dot.png',
            info: [['Atomic weight', '1.00794'], ['Density', '0.0809 g/l'], ['Melting point', '-259.14 C'], ['Boiling point', '-252.87 C']],
            text: 'By weight, 75% of the visible universe is hydrogen, a colorless gas. In space, vast quantities interact with starlight to create spectacular sights such as the Eagle Nebula (seen by the Hubble Space Telescope).',
            images: [],
        },
        {
            number: 8,
            period: [2, 6],
            symbol: 'O',
            atomic_mass: 15.999,
            name: 'Oxygen',
            info: [['Atomic weight', '16'], ['Density', '1.429 g/l'], ['Melting point', '-218.03 C'], ['Boiling point', '-182.9 C']],
            text: 'At 183.0 C the oxygen is a nice tight blue light, but at room temperature is a colorless gas. It represents only 21% of the atmosphere, those 21% that we all be able to live longer than a few minutes.',
            images: [],
        },
        {
            number: 2,
            period: 2,
            symbol: 'He',
            atomic_mass: 4.0026,
            name: 'Helium',
            info: [['Atomic weight', '4.003'], ['Density', '0.1785 g/l'], ['Melting point', 'N/A'], ['Boiling point', '-268.93 C']],
            text: 'Ordinarily, a colorless, inert gas, helium glows pale peach when an electric current runs through it. A glass blower bent a tube to the shape of the letters He and filled it with pure helium. It was lit with high voltage.',
            images: [],
        },
        {
            number: 13,
            period: [2, 8, 3],
            symbol: 'Al',
            atomic_mass: 26.982,
            name: 'Aluminium',
            info: [['Atomic weight', '26.98'], ['Density', '2.7 g/cm3'], ['Melting point', '660.32 C'], ['Boiling point', '2519 C']],
            text: 'These nodules were created by pouring molten aluminium into a bucket of water.',
            images: [],
        },
        {
            number: 79,
            period: [2, 8, 18, 32, 8, 1],
            symbol: 'Au',
            atomic_mass: 196.97,
            name: 'Gold',
            info: [['Atomic weight', '197'], ['Density', '19.3 g/cm3'], ['Melting point', '1064.18 C'], ['Boiling point', '2856 C']],
            text: 'Gold is one of the few elements you can find just lying on the ground. This one-ounce nugget of pure gold was found in Alaska in 1890 by Hogamorth Marion.',
            images: [],
        }
    ],
    infoForSearch: [
        {
            //first element
            overview: [['Symbol', 'H'], ['Atomic number', 1], ['Atomic weight', 1.00794], ['Density', '0.0899 g/l'], ['Melting point', '-259.14 C'], ['Boiling point', '-252.87 C']],

            thermal: [['Phase', 'Gas'], ['Melting point', '-259.14 C'], ['Boiling point', '-252.87 C'], ['Absolute melting point', '14.04 K'], ['Absolute boiling point', '-252.87 C'], ['Critical pressure', '12.76 Atm'], ['Critical temperature', '32.97 K'], ['Heat of fusion', '0.558 kJ/mol'], ['Heat of vaporization', '0.452 kJ/mol'], ['Heat of combustion', 'N/A'], ['Specific heat', '14300 J/(kg K)'], ['Adlabatic index', '7/5'], ['Neel point', 'N/A'], ['Theral conductivity', '0.1805 W/(m K)'], ['Thermal expansion', 'N/A']],

            physical: [['Density', '0.0899 g/l'], ['Density (liquid)', 'N/A'], ['Molar volume', '0.01121'], ['Brinell hardness', 'N/A'], ['Mohs hardess', 'N/A'], ['Vickers hardness', 'N/A'], ['Bulk modulus', 'N/A'], ['Shear modulus', 'N/A'], ['Young modulus', 'N/A'], ['Poison ratio', 'N/A'], ['Refractive index', '1.000132'], ['Speed of sound', '1270 m/s'], ['Thermal conductivity', '0.1805 W/(m/K)'], ['Thermal expansion', 'N/A']],

            reactivity: [['Valence', 1], ['Electronegativity', 2.2], ['Electron affinity', '72.8 kJ/mol'], ['Ionization energies', '1312 kJ/mol']],

            safety: [['Autoignition point', '535.5 C'], ['Flashpoint', '-18 C'], ['Heat of combustion', 'N/A']],

            classifications: [['Alternate names', 'N/A'], ['Names of allotropes', 'Dihydrogen'], ['Block', 's'], ['Group', 'group_1'], ['Period', 1], ['Electron configuration', '1s'], ['Color', 'Colorless'], ['Discovery', '1766 in United Kingdom'], ['Gas phase', 'Diatomic']],

            electrical: [['Electrical type', 'N/A'], ['Electrical conductivity', 'N/A'], ['Resistivity', 'N/A'], ['Superconducting point', 'N/A']],

            magnetic: [['Magnetic type', 'Diamagnetic'], ['Curie point', 'N/A'], ['Mass magnetic susceptibility', '-2.48x10 m3/mol'], ['Molar magnetic susceptibility', '-4.999x10 m3/mol'], ['Volume magnetic susceptibility', '-2.23x10']],

            abundances: [['In universe', '75%'], ['In sun', '75%'], ['In meteorites', '2.40%'], ["In earth's crust", '0.15%'], ['In oceans', '11%'], ['In humans', '10%']],

            atomic: [['Atomic radius', '53 pm'], ['Covalent radius', '37 pm'], ['Van der Walls radius', '120 p'], ['Crystal structure', 'Simple hexagonal'], ['Latice angles', 'п/2, п/2, 2 п/3'],
            ['Latice constant', '470, 470, 340 pm'], ['Space group name', 'P6/mmc'], ['Space group number', 194]],

            nuclear: [['Half-life', 'Stable'], ['Lifetime', 'Stable'], ['Decay mode', 'N/A'], ['Quantum numbers', '2s1/2'], ['Neutron cross section', 0.332], ['Neutron mass absorption', 0.011], ['Known isotopes', '1H, 2H, 3H, 4H, 5H, 6H, 7H'], ['Stable isotopes', ' 1H, 2H, 1H-99.99%'], ['Isotopic Abundances', '2H-0.01%']]
        },

        //second element
        {
            overview: [['Symbol', 'O'], ['Atomic number', 8], ['Atomic weight', 16], ['Density', '1.429 g/l'], ['Melting point', '-218.3 C'], ['Boiling point', '-182.9 C']],

            thermal: [['Phase', 'Gas'], ['Melting point', '-218.3 C'], ['Boiling point', '-182.9 C'], ['Absolute melting point', '54.8 K'], ['Absolute boiling point', '90.2 K'], ['Critical pressure', '49.77 Atm'], ['Critical temperature', '154.59 K'], ['Heat of fusion', '0.222 kJ/mol'], ['Heat of vaporization', '3.41 kJ/mol'], ['Heat of combustion', 'N/A'], ['Specific heat', '919 J(kg K)'], ['Adiabatic index', '7/5'], ['Neel point', 'N/A'], ['Thermal conductivity', '0.02658 W/(m K)'], ['Thermal expansion', 'N/A']],

            physical: [['Density', '1.429 g/l'], ['Density(liquid)', 'N/A'], ['Molar volume', '0.011196'], ['Brinel hardness', 'N/A'], ['Mohs hardness', 'N/A'], ['Vickers hardness', 'N/A'], ['Nulk modulus', 'N/A'], ['Shear modulus', 'N/A'], ['Young modulus', 'N/A'], ['Poison ratio', 'N/A'], ['Refractive index', 1], ['Speed of sound', '317.5 m/s'], ['Thermal conductivity', '0.02658 W/(m K)'], ['Thermal expansion', 'N/A']],

            reactivity: [['Valence', 2], ['Electronegativity', 3.44], ['Electron affinity', '141 kJ/mol'], ['Ionization energies', '1313.9, 3388.3, 5300.5, 71330, 84078 kJ/mol']],

            safety: [['Autoignition point', 'N/A'], ['Flashpoint', 'N/A'], ['Heat of combustion', 'N/A']],

            classifications: [['Alternate names', 'N/A'], ['Names of allotropes', 'Dioxygen, Ozone, Tetraoxygen'], ['Block', 'p'], ['Group', 'group_16'], ['Period', 2], ['Electron configuration', '[He]2s22p4'], ['Color', 'Colorless'], ['Discovery', '1774 in Sweden and United Kingdom'], ['Gas phase', 'Diatomic']],

            electrical: [['Electrical type', 'N/A'], ['Electrical conductivity', 'N/A'], ['Resistivity', 'N/A'], ['Superconducting point', 'N/A']],

            magnetic: [['Magnetic type', 'Paramagnetic'], ['Curie point', 'N/A'], ['Mass magnetic susceptibility', '1.335x10-6 m3/mol'], ['Molar magnetic suscepibility', '4.27184x10-8 m3/mol'], ['Volume megnetic suscepibility', '1.90772x10-6']],

            abundances: [['In universe', '1%'], ['In sun', '0.90%'], ['In meteorites', '40%'], ["In earth's crust", '46%'], ['In oceans', '86%'], ['In humans', '61%']],

            atomic: [['Atomic radius', '48 pm'], ['Colvalent radius', '73 pm'], ['Van der Waals radius', '152 pm'], ['Crystal structure', 'Base centered monoclinic'], ['Lattice angles', 'п/2, 2.313085, п/2'], ['Lattice constants', '540.3, 342.9, 508.6 pm'], ['Space group name', 'C12/m1'], ['Space group number', 12]],

            nuclear: [['Half-life', 'Stable'], ['Life-time', 'Stable'], ['Decay mode', 'N/A'], ['Quantum numbers', '3P2'], ['Neutron cross section', '0.00028'], ['Neutron mass absorption', '1x10-6'], ['Known isotopes', '12-O, 13-O, 14-O, 15-O, 16-O, 17-O, 18-O, 19-O, 20-O, 21-O, 22-O, 23-O, 24-O, 25-O, 26-O, 27-O, 28-O'], ['Stable isotopes', '16-O, 17-O, 18-O'], ['Isotopic Abunndances', '16-O - 99.757%, 17-O - 0.038%, 18-O - 0.205%']],
        },
        //third element
        {
            overview: [['Symbol', 'He'], ['Atomic number', 2], ['Atomic weight', 4.003], ['Density', '0.1785 g/l'], ['Melting point', 'N/A'], ['Boiling point', '-268.93 C']],

            thermal: [['Phase', 'Gas'], ['Melting point', 'N/A'], ['Boiling point', '-268.93 C'], ['Absolute melting point', 'N/A'], ['Absolute boliling point', '4.22 K'], ['Heat of fusion', '0.02 kJ/mol'], ['Heat of vaporization', '0.083 kJ/ mol'], ['Heat of combustion', 'N/A'], ['Specific heat', '5193.1 J(kg K)'], ['Adiabatic index', '7/5'], ['Neel point', 'N/A'], ['Thermal conductivity', '0.1513 W/(m K)'], ['Thermal expansion', 'N/A']],

            physical: [['Density', '0.1785 g/l'], ['Density (liquid)', 'N/A'], ['Molar volume', '0.022424'], ['Brinell hardness', 'N/A'], ['Mohs hardness', 'N/A'], ['Vickers hardness', 'N/A'], ['Bulk modulus', 'N/A'], ['Shear modulus', 'N/A'], ['Young modulus', 'N/A'], ['Poison ratio', 'N/A'], ['Refractive index', 1], ['Speed of sound', '970 m/s'], ['Thermal conductivity', '0.1513 W/(m K)'], ['Thermal expansion', 'N/A']],

            reactivity: [['Valence', 0], ['Electronegativity', 'N/A'], ['Electron affinity', '0kJ/mol'], ['Ionization energies', '2372.3, 5250.5 kJ/mol']],

            safety: [['Autoignition point', 'N/A'], ['Flashpoint', 'N/A'], ['Heat of combustion', 'N/A']],

            classifications: [['Altername names', 'N/A'], ['Names of allotropes', 'N/A'], ['Block', 'p'], ['Group', 'group_18'], ['Period', 1], ['Electron configuration', '1s-2'], ['Color', 'colorless'], ['Discovery', '1895 in Sweden and Unites Kingdom'], ['Gas phase', 'Monoatomic']],

            electrical: [['Electrical type', 'N/A'], ['Electrical conductivity', 'N/A'], ['Resistivity', 'N/A'], ['Superconductin point', 'N/A']],

            magnetic: [['Magnetic type', 'Diamagnetic'], ['Curie point', 'N/A'], ['Mass magnetic susceptibility', '-5.9x10-9 m-3/Kg'], ['Molar magnetic susceptibility', '-1.05x10-9']],

            abundances: [['In universe', '23%'], ['In sun', '23%'], ['In meteorites', 'N/A'], ["In earth's crust", '5.5x10-7%'], ['In oceans', '7.2x10-10%'], ['In humans', 'N/A']],

            atomic: [['Atomic radius', '31 pm'], ['Covalent radius', '32 pm'], ['Van den Waals radius', '140 pm'], ['Crystal structure', 'Face centered cubic'], ['Lattice angles', 'п/2, п/2, п/2'], ['Lattice constants', '424.2, 424.2, 424.2 pm'], ['Space group name', 'Fm_3m'], ['Space group number', '225']],

            nuclear: [['Half-life', 'Stable'], ['Lifetime', 'Stable'], ['Decay mode', 'N/A'], ['Quantum numbers', '1-S-0'], ['Neutron cross section', '0.007'], ['Neutron mass absorption', '1x10-5'], ['Known isotopes', '3-He, 4-He, 5-He, 6-He, 7-He, 8-He, 9-He, 10-He'], ['Stable isotopes', '3-He, 4-He'], ['Isotopic Abundances', '3-He - 0.000137%, 4-He - 99.999863%']],
        },
        //forth element
        {
            overview: [['Symbol', 'Al'], ['Atomic number', 13], ['Atomic weight', 26.98], ['Density', '2.7 g/cm3'], ['Melting point', '660.32 C'], ['Boiling point', '2519 C']],

            thermal: [['Phase', 'Solid'], ['Melting point', '660.32 C'], ['Boiling point', '2519 C'], ['Absolute melting point', '933.47 K'], ['Absolute boiling point', '2792 K'], ['Critical pressure', 'N/A'], ['Critical temperature', 'N/A'], ['Heat of fusion', '10.7 kJ/mol'], ['Heat of vaporization', '293 kJ/mol'], ['Heat of combustion', 'N/A'], ['Specific heat', '904 J/(kg K)'], ['Adiabatic index', 'N/A'], ['Neel point', 'N/A'], ['Thermal conductivity', '235 W/(m K)'], ['Thermal expansion', '0.0000231 K-1']],

            physical: [['Density', '2.7 g/cm3'], ['Density (liquid)', '2.375 g/cm3'], ['Molar volume', '9.99x10-6'], ['Brinell hardness', '245 MPa'], ['Mohs hardness', '2.75 MPa'], ['Vickers hardness', '167 MPa'], ['Bulk modulus', '76 GPa'], ['Shear modulus', '26 GPa'], ['Young modulus', '70 GPa'], ['Poison ratio', '0.35'], ['Refractive index', 'N/A'], ['Speed of sound', '5100 m/s'], ['Thermal conductivity', '235 W/(m K)'], ['Therml expansion', '0.0000231 K-1']],

            reactivity: [['Valence', 3], ['Electronegativity', 1.61], ['Electron effinity', '42.5 kJ/mol'], ['Ionization energies', '577.5, 1816.7, 2744.8, 11577, 14842, 18379, 23326, 27465, 38473 kJ/mol']],

            safety: [['Autoignition point', '400 C'], ['Flashpoint', '645 C'], ['Heat of combustion', 'N/A']],

            classification: [['Altername names', 'Aluminium'], ['Names of alloptopes', 'N/A'], ['Block', 'p'], ['Group', 'group_13'], ['Period', 3], ['Electron configuration', '[Ne]3s23p1'], ['Color', 'Silver'], ['Discovery', '1825 in Denmark'], ['Gas phase', 'N/A']],

            electrical: [['Electrical type', 'Conductor'], ['Electrical conductivity', '3.8x10-7 S/m'], ['Resistivity', '2.6x10-8 m'], ['Superconducting point', '1.175']],

            magnetic: [['Magnetic type', 'Paramagnetic'], ['Curie point', 'N/A'], ['Mass magnetic susceptibility', '7.8x10-9 m3/Kg'], ['Molar magnetic susceptibility', '2.1x10-10 m3/mol'], ['Volume magnetic susceptibility', '0.0000211']],

            abundances: [['In universe', '0.01%'], ['In sun', '0.01%'], ['In meteorites', '0.91%'], ["In earth's crust", '8.10%'], ['In oceans', '5x10-7%'], ['In humans', '0.00%']],

            atomic: [['Atomic radius', '118 pm'], ['Covalent radius', '118 pm'], ['Van der Waals radius', 'N/A'], ['Crystal structure', 'Face Centered Cubic'], ['Lattice angles', 'п/2, п/2, п/2'], ['Lattice constants', '404.95, 404.95, 404.95 pm'], ['Space group name', 'Fm-3m'], ['Space group number', 225]],

            nuclear: [['Half-life', 'Stable'], ['Lifetime', 'Stable'], ['Decay mode', 'N/A'], ['Quantum numbers', '2-P 1/2'], ['Neutron cross section', '0.233'], ['Neutron mass absorption', '0.03'], ['Known Isotopes', '21-Al, 22-Al, 23-Al, 24-Al, 25-Al, 26-Al, 27-Al, 28-Al, 29-Al, 30-Al, 31-Al, 32-Al, 33-Al, 34-Al, 35-Al, 36-Al, 37-Al, 38-Al, 39-Al, 40-Al, 41-Al, 42-Al'], ['Stable Isotopes', '27-Al'], ['Isotopic Abundances', '27-Al - 100%']],
        },
        //fifth element
        {
            overview: [['Symbol', 'Au'], ['Atomic number', '79'], ['Atomic weight', '197'], ['Density', '19.3 g/cm3'], ['Melting point', '1064.18 C'], ['Boiling point', '2856 C']],

            thermal: [['Phase', 'Solid'], ['Melting point', '1064.18 C'], ['Boiling point', '2856 C'], ['Absolute melting point', '1337.33 K'], ['Absolute boiling point', '3129 K'], ['Critical pressure', 'N/A'], ['Critical teperature', 'N/A'], ['Heat of fusion', '12.5 kJ/mol'], ['Heat of vaporization', '330 kJ/mol'], ['Heat of combustion', 'N/A'], ['Specific heat', '129.1 J(kg K)'], ['Adiabatic index', 'N/A'], ['Neel point', 'N/A'], ['Thermal Conductivity', '320 W/(m K)'], ['Thermal expansion', '0.0000142 K-1']],

            physical: [['Density', '19.3 g/cm3'], ['Density (liquid)', '17.31 g/cm3'], ['Molar volume', '0.00001021'], ['Brinel hardness', '2450MPa'], ['Mohs hardness', '2.5 MPa'], ['Vickers hardness', '216 MPa'], ['Buld modulus', '220 GPa'], ['Shear modulus', '27 GPa'], ['Young modulus', '78 GPa'], ['Poison ratio', '0.44'], ['Refravtive index', 'N/A'], ['Speed of sound', '1740 m/s'], ['Thermal conductivity', '320 W/(m K)'], ['Thermal expanstion', '0.0000142 K-1']],

            reactivity: [['Valence', '5'], ['Electronegativity', '2.54'], ['Electron affinity', '222.8 kJ/mol'], ['Ionization energies', '890.1, 1980 kJ/mol']],

            safety: [['Autoignition point', 'N/A'], ['Flashpoint', 'N/A'], ['Heat of combustion', 'N/A']],

            classifications: [['Altername names', 'Aurum'], ['Names of allotropes', 'N/A'], ['Block', 'd'], ['Group', 'group_11'], ['Period', 6], ['Electron configuration', '[Xe]4f-14 5d-10 6s-1'], ['Color', 'Gold'], ['Discovery', '2500 BC'], ['Gas phase', 'N/A']],

            electrical: [['Electrical type', 'Conductor'], ['Electrical conductivity', '4.5x10-7 S/m'], ['Resistivity', '2.2x10-8 m'], ['Superconducting point', 'N/A']],

            magnetic: [['Magnetic type', 'Diamagnetic'], ['Curie point', 'N/A'], ['Mass magnetic susceptibility', '-1.78x10-9 m3/Kg'], ['Molar agnetic susceptibility', '-3.51x10-10 m3/mol'], ['Volume magnetic susceptibility', '-0.0000344']],

            abundances: [['In universe', '6x110-8%'], ['In sun', '1x10-7%'], ['In meteorites', '0.00%'], ["In earth's crust", '3.1x10-7%'], ['In oceans', '5x10-9%'], ['In humans', '0.00%']],

            atomic: [['Atomic radius', '174 pm'], ['Covalent radius', '144 pm'], ['Van der Waals radius', '166 pm'], ['Crystal structure', 'Face centered cubis'], ['Lattice angles', 'п/2, п/2, п/2'], ['Lattice constants', '407.82, 407.82, 407.82 pm'], ['Space group name', 'Fm_3m'], ['Space group number', '225']],

            nuclear: [['Half-life', 'Stable'], ['Lifetime', 'Stable'], ['Decay mode', 'N/A'], ['Quantum numbers', '2s 1/2'], ['Neutron cross section', '98.7'], ['Neuron mass absorption', '0.017'], ['Known Isotopes', '169-Au, 170-Au, 171-Au, 172-Au, 173-Au, 174-Au, 175-Au, 176-Au, 177-Au, 178-Au, 179-Au, 180-Au, 181-Au, 182-Au, 183-Au, 184-Au, 185-Au, 186-Au, 187-Au, 188-Au, 189-Au, 190-Au, 200-Au']],

        }
    ]
}
