import { Icon } from '@iconify/react';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Iconify from '../../../components/Iconify';
// import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

// const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'general',
  //   items: [
  //     { title: 'app', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
  //     { title: 'ecommerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
  //     { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
  //     { title: 'banking', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
  //     { title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
  //   ],
  // },

  // Secondary school
  {
    subheader: 'secondary_school',
    items: [
      {
        title: 'grade_seven',
        path: PATH_DASHBOARD.gradeSeven.root,
        icon: <Iconify icon="ion:school-outline" />,
        children: [
          // {
          //   title: 'Chất và sự biến đổi chất', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />, children: [
          //     {
          //       title: 'Mô hình nguyên tử của Rutherford - Bohr', path: '', children: [
          //         { title: 'rutherford', path: PATH_DASHBOARD.gradeSeven.rutherford, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //         { title: 'bohr', path: PATH_DASHBOARD.gradeSeven.bohr, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //       ], icon: <Iconify icon="vscode-icons:file-type-light-todo" />
          //     },
          //     {
          //       title: ' Mô hình một số mẫu đơn chất và hợp chất', path: '', children: [
          //         { title: 'O\u2082', path: PATH_DASHBOARD.gradeSeven.oxi, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //         { title: 'H\u2082', path: PATH_DASHBOARD.gradeSeven.hydro, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //         { title: 'Cl\u2082', path: PATH_DASHBOARD.gradeSeven.clo, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //         { title: 'CO\u2082', path: PATH_DASHBOARD.gradeSeven.co2, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //         { title: 'H\u2082O', path: PATH_DASHBOARD.gradeSeven.h2o, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //         { title: 'N\u2082', path: PATH_DASHBOARD.gradeSeven.nito, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //         { title: 'NH\u2083', path: PATH_DASHBOARD.gradeSeven.nh3, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //         { title: 'Cu', path: PATH_DASHBOARD.gradeSeven.cu, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //         { title: 'NaCl', path: PATH_DASHBOARD.gradeSeven.nacl, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //       ], icon: <Iconify icon="vscode-icons:file-type-light-todo" />
          //     },
          //   ]
          // },
          // {
          //   title: 'Năng lượng và sự biến đổi', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
          //   children: [
          //     {
          //       title: 'Cách âm thanh truyền đi trong các môi trường', path: '', icon: <Iconify icon="vscode-icons:file-type-manifest" />, children: [
          //         { title: 'sound_wave_air', path: PATH_DASHBOARD.gradeSeven.sound_wave_travel_is_air, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //         { title: 'sound_wave_water', path: PATH_DASHBOARD.gradeSeven.sound_wave_travel_is_water, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //         { title: 'sound_wave_solids', path: PATH_DASHBOARD.gradeSeven.sound_wave_travel_is_solids, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //       ], icon: <Iconify icon="vscode-icons:file-type-light-todo" />
          //     },
          //     {
          //       title: 'light_reflection', path: PATH_DASHBOARD.gradeSeven.light_reflection, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
          //     },
          //     {
          //       title: 'earth_magnetic', path: PATH_DASHBOARD.gradeSeven.earthMagnetic, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
          //     },
          //     {
          //       title: 'magnet', path: PATH_DASHBOARD.gradeSeven.magnetRoad, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
          //     },
          //   ]
          // },
          {
            title: 'Vật sống', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
            children: [
              {
                title: 'Con đường trao đổi nước ở thực vật', path: '', icon: <Iconify icon="vscode-icons:file-type-log" />, children: [
                  { title: 'transport_water_in_plants', path: PATH_DASHBOARD.gradeSeven.transport_water_in_plants, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
                  // { title: 'transport_water_in_roots', path: PATH_DASHBOARD.gradeSeven.transport_water_in_roots, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
                  // { title: 'root_structure', path: PATH_DASHBOARD.gradeSeven.root_structure, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
                  // { title: 'feather_sucker', path: PATH_DASHBOARD.gradeSeven.feather_sucker, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
                ], icon: <Iconify icon="vscode-icons:file-type-light-todo" />
              }
            ]
          },
          // {
          //   title: 'Chưa phân loại', path: PATH_DASHBOARD.gradeSeven.magnet, icon: <Iconify icon="vscode-icons:file-type-registry" />,
          //   children: [
          //     { title: 'Cu', path: PATH_DASHBOARD.gradeSeven.cu, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //     { title: 'Nito', path: PATH_DASHBOARD.gradeSeven.nito, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //     { title: 'Natri clorua', path: PATH_DASHBOARD.gradeSeven.nacl, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //   ]
          // },
          // { title: 'magnet', path: PATH_DASHBOARD.gradeSeven.magnet },
          // { title: 'earth_magnetic', path: PATH_DASHBOARD.gradeSeven.earthMagnetic },
          // { title: 'rutherford', path: PATH_DASHBOARD.gradeSeven.rutherford },
          // { title: 'bohr', path: PATH_DASHBOARD.gradeSeven.bohr },
          // { title: 'oxi', path: PATH_DASHBOARD.gradeSeven.oxi },
          // { title: 'hydro', path: PATH_DASHBOARD.gradeSeven.hydro },
          // { title: 'clo', path: PATH_DASHBOARD.gradeSeven.clo },
          // { title: 'co2', path: PATH_DASHBOARD.gradeSeven.co2 },
          // { title: 'cu', path: PATH_DASHBOARD.gradeSeven.cu },
          // { title: 'h2o', path: PATH_DASHBOARD.gradeSeven.h2o },
          // { title: 'nito', path: PATH_DASHBOARD.gradeSeven.nito },
          // { title: 'nacl', path: PATH_DASHBOARD.gradeSeven.nacl },
          // { title: 'nh3', path: PATH_DASHBOARD.gradeSeven.nh3 },
          // { title: 'sound_wave_air', path: PATH_DASHBOARD.gradeSeven.sound_wave_travel_is_air },
          // { title: 'sound_wave_water', path: PATH_DASHBOARD.gradeSeven.sound_wave_travel_is_water },
          // { title: 'sound_wave_solids', path: PATH_DASHBOARD.gradeSeven.sound_wave_travel_is_solids },
          // { title: 'transport_water_in_plants', path: PATH_DASHBOARD.gradeSeven.transport_water_in_plants },
          // { title: 'transport_water_in_roots', path: PATH_DASHBOARD.gradeSeven.transport_water_in_roots },
          // { title: 'root_structure', path: PATH_DASHBOARD.gradeSeven.root_structure },
          // { title: 'feather_sucker', path: PATH_DASHBOARD.gradeSeven.feather_sucker },
        ],
      },


      // //     // Grade Eight
      // {
      //   title: 'grade_eight',
      //   path: PATH_DASHBOARD.gradeEight.root,
      //   icon: <Iconify icon="ion:school-outline" />,
      //   children: [
      //     {
      //       title: 'Năng lượng và sự biến đổi', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
      //       children: [
      //         {
      //           title: 'ear_structure', path: PATH_DASHBOARD.gradeEight.ear_structure, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
      //         },
      //       ]
      //     },
      //     {
      //       title: 'Vật sống', path: PATH_DASHBOARD.gradeSeven.magnet, icon: <Iconify icon="vscode-icons:file-type-registry" />,
      //       children: [
      //         {
      //           title: 'digestive', path: PATH_DASHBOARD.gradeEight.digestive, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
      //         },
      //         {
      //           title: 'circulatory', path: PATH_DASHBOARD.gradeEight.circulatory, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
      //         },
      //         {
      //           title: 'respiratory', path: PATH_DASHBOARD.gradeEight.respiratory, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
      //         },
      //         {
      //           title: 'nerve', path: PATH_DASHBOARD.gradeEight.nerve, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
      //         },
      //       ]
      //     },
      //   ]
      //   // children: [
      //   //   { title: 'digestive', path: PATH_DASHBOARD.gradeEight.digestive },
      //   //   { title: 'circulatory', path: PATH_DASHBOARD.gradeEight.circulatory },
      //   //   { title: 'respiratory', path: PATH_DASHBOARD.gradeEight.respiratory },
      //   //   { title: 'nerve', path: PATH_DASHBOARD.gradeEight.nerve },
      //   //   { title: 'ear_structure', path: PATH_DASHBOARD.gradeEight.ear_structure }
      //   // ],
      // },

      // //     // Grade Nine
      // {
      //   title: 'grade_nine',
      //   path: PATH_DASHBOARD.gradeNine.root,
      //   icon: <Iconify icon="ion:school-outline" />,
      //   children: [
      //     {
      //       title: 'Năng lượng và sự biến đổi', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
      //       children: [
      //         {
      //           title: 'light_reflection', path: PATH_DASHBOARD.gradeNine.light_reflection, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
      //         },
      //         {
      //           title: 'light_refraction', path: PATH_DASHBOARD.gradeNine.light_refraction, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
      //         },
      //         {
      //           title: 'light_dispersion', path: PATH_DASHBOARD.gradeNine.light_dispersion, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
      //         },
      //       ]
      //     },
      //     {
      //       title: 'Chất và sự biến đổi của chất', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
      //       children: [
      //         {
      //           title: 'cementkiln', path: PATH_DASHBOARD.gradeNine.cementkiln, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
      //         },
      //         {
      //           title: 'Cấu trúc một số phân tử chất hữu cơ', path: '', icon: <Iconify icon="ion:school-outline" />, children: [
      //             { title: 'ethane', path: PATH_DASHBOARD.gradeNine.ethane, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //             { title: 'ethylic_alcohol', path: PATH_DASHBOARD.gradeNine.ethylicAlcohol, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //             { title: 'acetic_acid', path: PATH_DASHBOARD.gradeNine.acetic_acid, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //             { title: 'glucozo', path: PATH_DASHBOARD.gradeNine.glucozo, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //             { title: 'fructozo', path: PATH_DASHBOARD.gradeNine.fructozo, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //           ], icon: <Iconify icon="vscode-icons:file-type-light-todo" />
      //         },
             
      //         {
      //           title: 'cast_iron_furmace', path: PATH_DASHBOARD.gradeNine.cast_iron_furmace, icon: <Iconify icon="vscode-icons:file-type-manifest" />,

      //         },
      //       ]
      //     },
      //   ]
      //   // children: [
      //   //   { title: 'ethylic_alcohol', path: PATH_DASHBOARD.gradeNine.ethylicAlcohol },
      //   //   { title: 'fructozo', path: PATH_DASHBOARD.gradeNine.fructozo },
      //   //   { title: 'acetic_acid', path: PATH_DASHBOARD.gradeNine.acetic_acid },
      //   //   { title: 'glucozo', path: PATH_DASHBOARD.gradeNine.glucozo },
      //   //   { title: 'ethane', path: PATH_DASHBOARD.gradeNine.ethane },
      //   // { title: 'cast_iron_furmace', path: PATH_DASHBOARD.gradeNine.cast_iron_furmace },
      //   //   { title: 'cementkiln', path: PATH_DASHBOARD.gradeNine.cementkiln },
      //   // ],
      // },
    ],
  },

  // High school

  {
    subheader: 'high_school',
    items: [
      // physics
      {
        title: 'physics',
        path: PATH_DASHBOARD.physics.root,
        icon: <Iconify icon="ion:logo-react" />,
        children: [
          // {
          //   title: 'earth_and_sky', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
          //   children: [
          //     {
          //       title: 'starmap', path: PATH_DASHBOARD.physics.starmap, icon: <Iconify icon="vscode-icons:file-type-manifest" />
          //     },
          //     {
          //       title: 'solarSystem', path: PATH_DASHBOARD.physics.solar_system, icon: <Iconify icon="vscode-icons:file-type-manifest" />
                 
          //     },
          //     {
          //       title: 'simulate_earth_sun_moon', path: PATH_DASHBOARD.physics.simulate_earth_sun_moon, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
               
          //     },
          //     {
          //       title: 'Nhật, nguyệt thực, thủy triều', path: '', icon: <Iconify icon="ion:school-outline" />, children: [
          //         { title: 'eclipse', path: PATH_DASHBOARD.physics.eclipse, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //         { title: 'lunar_eclipse', path: PATH_DASHBOARD.physics.lunarEclipse, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //         { title: 'tide', path: PATH_DASHBOARD.physics.tide, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //       ], icon: <Iconify icon="vscode-icons:file-type-light-todo" />
          //     },

          //   ]
          // },
          // {
          //   title: 'Dao động', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
          //   children: [
          //     { title: 'simple_pendulum_descending', path: PATH_DASHBOARD.physics.simple_pendulum_descending, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //     { title: 'simple_pendulum_descending_in_oil', path: PATH_DASHBOARD.physics.simple_pendulum_descending_in_oil, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //     { title: 'simple_pendulum_descending_in_water', path: PATH_DASHBOARD.physics.simple_pendulum_descending_in_water, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //     { title: 'fades_in_air', path: PATH_DASHBOARD.physics.fades_in_air, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //     { title: 'fades_in_oil', path: PATH_DASHBOARD.physics.fades_in_oil, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //     { title: 'fades_in_water', path: PATH_DASHBOARD.physics.fades_in_water, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //     { title: 'forced_oscillation', path: PATH_DASHBOARD.physics.forced_oscillation, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //     { title: 'resonance_oscillation', path: PATH_DASHBOARD.physics.resonance_oscillation, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
          //   ]
          // },
          // {
          //   title: 'electrical_circuit', path: PATH_DASHBOARD.physics.electrical_circuit, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
          // },
          {
            title: 'capacitor', path: PATH_DASHBOARD.physics.capacitor, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
          },
          // { 
          //   title: 'nuclearStructure', path: PATH_DASHBOARD.physics.nuclear_structure, icon: <Iconify icon="vscode-icons:file-type-manifest" /> 
          // },
          // {
          //   title: 'gravitational_magnetic_field', path: PATH_DASHBOARD.physics.gravitational_magnetic_field, icon: <Iconify icon="vscode-icons:file-type-manifest" />,
          // },
          // {
          //   title: 'xray', path: PATH_DASHBOARD.physics.xray, icon: <Iconify icon="vscode-icons:file-type-manifest" />
          // },
          // {
          //   title: 'earth_and_sky',
          //   icon: <Iconify icon="ion:earth-sharp" />,
          //   children: [
          // { title: 'lunar_eclipse', path: PATH_DASHBOARD.physics.lunarEclipse },
          //     { title: 'eclipse', path: PATH_DASHBOARD.physics.eclipse },
          //     { title: 'tide', path: PATH_DASHBOARD.physics.tide }
          //   ],
          // },
          // { title: 'eclipse', path: PATH_DASHBOARD.physics.eclipse },
          // { title: 'tide', path: PATH_DASHBOARD.physics.tide },
          // { title: 'starmap', path: PATH_DASHBOARD.physics.starmap },
          // { title: 'solarSystem', path: PATH_DASHBOARD.physics.solar_system },
          // { title: 'electrical_circuit', path: PATH_DASHBOARD.physics.electrical_circuit },
          // { title: 'nuclearStructure', path: PATH_DASHBOARD.physics.nuclear_structure },
          // { title: 'resonance_oscillation', path: PATH_DASHBOARD.physics.resonance_oscillation },
          // { title: 'simple_pendulum_descending', path: PATH_DASHBOARD.physics.simple_pendulum_descending },
          // { title: 'simple_pendulum_descending_in_oil', path: PATH_DASHBOARD.physics.simple_pendulum_descending_in_oil },
          // { title: 'simple_pendulum_descending_in_water', path: PATH_DASHBOARD.physics.simple_pendulum_descending_in_water },
          // { title: 'forced_oscillation', path: PATH_DASHBOARD.physics.forced_oscillation },
          // { title: 'fades_in_water', path: PATH_DASHBOARD.physics.fades_in_water },
          // { title: 'fades_in_oil', path: PATH_DASHBOARD.physics.fades_in_oil },
          // { title: 'fades_in_air', path: PATH_DASHBOARD.physics.fades_in_air },
          // { title: 'gravitational_magnetic_field', path: PATH_DASHBOARD.physics.gravitational_magnetic_field },
          // { title: 'xray', path: PATH_DASHBOARD.physics.xray },
          // { title: 'simulate_earth_sun_moon', path: PATH_DASHBOARD.physics.simulate_earth_sun_moon },
          // { title: 'light_reflection', path: PATH_DASHBOARD.physics.light_reflection },
          // { title: 'light_refraction', path: PATH_DASHBOARD.physics.light_refraction },
          // { title: 'light_dispersion', path: PATH_DASHBOARD.physics.light_dispersion }
        ],
      },
      // toi day roi
      // {
      //   title: 'chemistry',
      //   path: PATH_DASHBOARD.chemistry.root,
      //   icon: <Iconify icon="ion:flask-outline" />,
      //   children: [
      //     // {
      //     //   title: 'Dùng chung cho nhiều chủ đề', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
      //     //   children: [
      //     //     {
      //     //       title: 'Bộ mô phỏng 3D', path: PATH_DASHBOARD.chemistry.saccarozo, icon: <Iconify icon="ion:school-outline" />, children: [
      //     //         { title: 'saccarozo', path: PATH_DASHBOARD.chemistry.saccarozo, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     //       ], icon: <Iconify icon="vscode-icons:file-type-manifest" />
      //     //     }
      //     //   ]
      //     // },
      //     {
      //       title: 'Ester - lipid', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
      //       children: [
      //         { title: 'ester', path: PATH_DASHBOARD.chemistry.ester, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'saponification', path: PATH_DASHBOARD.chemistry.saponification, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //       ]
      //     },
      //     {
      //       title: 'Hydrocarbon', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
      //       children: [

      //         { title: 'methane', path: PATH_DASHBOARD.chemistry.methane, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'acetylene', path: PATH_DASHBOARD.chemistry.acetylene, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'Benzene', path: PATH_DASHBOARD.chemistry.benzen, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'benzen_nitrification', path: PATH_DASHBOARD.chemistry.benzen_nitrification, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },

      //       ]
      //     },
      //     {
      //       title: 'Hợp chất carbonyl (aldehyde - ketone) - carboxylic acid', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
      //       children: [

      //         { title: 'acid_acetic', path: PATH_DASHBOARD.chemistry.acid_acetic, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'ethanal', path: PATH_DASHBOARD.chemistry.ethanal, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'Ethyl acetate', path: PATH_DASHBOARD.chemistry.ethylacetate, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'ethylene', path: PATH_DASHBOARD.chemistry.ethylene, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'methanal', path: PATH_DASHBOARD.chemistry.methanal, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },

      //       ]
      //     },
      //     {
      //       title: 'Hợp chất chứa nitrogen', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
      //       children: [

      //         { title: 'amino_acid', path: PATH_DASHBOARD.chemistry.amino_acid, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'aniline', path: PATH_DASHBOARD.chemistry.anilin, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'methylamine', path: PATH_DASHBOARD.chemistry.methylamine, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'protein', path: PATH_DASHBOARD.chemistry.protein, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },

      //       ]
      //     },

      //     {
      //       title: 'Carbohydrate', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
      //       children: [


      //         { title: 'hydrolyis_of_cellulose', path: PATH_DASHBOARD.chemistry.hydrolyis_of_cellulose, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'starch_hydrolyzate', path: PATH_DASHBOARD.chemistry.starch_hydrolyzate, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'starch', path: PATH_DASHBOARD.chemistry.starch, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'saccarozo', path: PATH_DASHBOARD.chemistry.saccarozo, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'maltose', path: PATH_DASHBOARD.chemistry.maltose, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'creation_process_starch', path: PATH_DASHBOARD.chemistry.creation_process_starch, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //       ]
      //     },

      //     {
      //       title: 'Dẫn xuất halogen - alcohol - phenol', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
      //       children: [

      //         { title: 'phenol', path: PATH_DASHBOARD.chemistry.phenol, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'hydrolyzed_ethyl_bromide', path: PATH_DASHBOARD.chemistry.hydrolyzed_ethyl_bromide, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'methanol', path: PATH_DASHBOARD.chemistry.methanol, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },

      //       ]
      //     },

      //     // {
      //     //   title: 'Chưa xác định', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
      //     //   children: [
      //     //     {
      //     //       title: 'Ethylic ancohol (Không có trong TT)', path: '', icon: <Iconify icon="ion:school-outline" />, children: [
      //     //         { title: 'ethylic_alcohol', path: PATH_DASHBOARD.gradeNine.ethylicAlcohol, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     //       ], icon: <Iconify icon="vscode-icons:file-type-manifest" />
      //     //     },
      //     //     {
      //     //       title: 'Methanol (Không có trong TT)', path: '', icon: <Iconify icon="ion:school-outline" />, children: [

      //     //       ], icon: <Iconify icon="vscode-icons:file-type-manifest" />
      //     //     },
      //     //   ]
      //     // },
      //     {
      //       title: 'Pin điện và điện phân', path: '', icon: <Iconify icon="vscode-icons:file-type-registry" />,
      //       children: [

      //         { title: 'electrolytic_cell', path: PATH_DASHBOARD.chemistry.electrolytic_cell, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //         { title: 'battery', path: PATH_DASHBOARD.chemistry.battery, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },

      //       ]
      //     },
      //   ],
      // },

      // chemistry

      // {
      //   title: 'chemistry',
      //   path: PATH_DASHBOARD.chemistry.root,
      //   icon: <Iconify icon="ion:flask-outline" />,
      //   children: [
      //     // { title: 'saccarozo', path: PATH_DASHBOARD.chemistry.saccarozo },
      //     // { title: 'ester', path: PATH_DASHBOARD.chemistry.ester },
      //     // { title: 'methane', path: PATH_DASHBOARD.chemistry.methane },
      //     // { title: 'acid_acetic', path: PATH_DASHBOARD.chemistry.acid_acetic, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'amino_acid', path: PATH_DASHBOARD.chemistry.amino_acid, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'anilin', path: PATH_DASHBOARD.chemistry.anilin, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'acetylene', path: PATH_DASHBOARD.chemistry.acetylene },
      //     // { title: 'benzen', path: PATH_DASHBOARD.chemistry.benzen },
      //     // { title: 'electrolytic_cell', path: PATH_DASHBOARD.chemistry.electrolytic_cell, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'ethanal', path: PATH_DASHBOARD.chemistry.ethanal, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'ethylene', path: PATH_DASHBOARD.chemistry.ethylene, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'ethylic_ancohol', path: PATH_DASHBOARD.chemistry.ethylic_ancohol, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'maltose', path: PATH_DASHBOARD.chemistry.maltose, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'methanal', path: PATH_DASHBOARD.chemistry.methanal, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'methanol', path: PATH_DASHBOARD.chemistry.methanol, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'methylamine', path: PATH_DASHBOARD.chemistry.methylamine, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'phenol', path: PATH_DASHBOARD.chemistry.phenol, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'battery', path: PATH_DASHBOARD.chemistry.battery, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'protein', path: PATH_DASHBOARD.chemistry.protein, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'starch', path: PATH_DASHBOARD.chemistry.starch, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'creation_process_starch', path: PATH_DASHBOARD.chemistry.creation_process_starch, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'saponification', path: PATH_DASHBOARD.chemistry.saponification },
      //     // { title: 'ethylacetate', path: PATH_DASHBOARD.chemistry.ethylacetate, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'benzen_nitrification', path: PATH_DASHBOARD.chemistry.benzen_nitrification, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'hydrolyis_of_cellulose', path: PATH_DASHBOARD.chemistry.hydrolyis_of_cellulose, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'starch_hydrolyzate', path: PATH_DASHBOARD.chemistry.starch_hydrolyzate, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'hydrolyzed_ethyl_bromide', path: PATH_DASHBOARD.chemistry.hydrolyzed_ethyl_bromide, icon: <Iconify icon="vscode-icons:file-type-manifest" /> }
      //   ],
      // },
      // {
      //   title: 'biology',
      //   path: PATH_DASHBOARD.biology.root,
      //   icon: <Icon icon="ic:baseline-biotech" />,
      //   children: [
          
      //         {
      //           title: 'Cấu trúc tế bào', path: '', icon: <Iconify icon="ion:school-outline" />, children: [
      //             { title: 'prokaryotic', path: PATH_DASHBOARD.biology.prokaryotic, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //             { title: 'eukaryotic', path: PATH_DASHBOARD.biology.eukaryotic, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //           ], icon: <Iconify icon="vscode-icons:file-type-registry" />
      //         },
      //         {
      //           title: 'Virus và các ứng dụng', path: '', icon: <Iconify icon="ion:school-outline" />, children: [
      //             { title: 'hiv_cells', path: PATH_DASHBOARD.biology.hiv_cells, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //             { title: 'hepatitisB', path: PATH_DASHBOARD.biology.hepatitisB, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //           ], icon: <Iconify icon="vscode-icons:file-type-registry" />
      //         },
      //         {
      //           title: 'republishADN', path: PATH_DASHBOARD.biology.republish_adn, icon: <Iconify icon="vscode-icons:file-type-manifest" /> ,
      //         },
      //         {
      //           title: 'Trao đổi chất và chuyến hoá năng lượng ở thực vật', path: '', icon: <Iconify icon="ion:school-outline" />, children: [
      //             { title: 'metabolism_in_plants', path: PATH_DASHBOARD.biology.metabolism_in_plants, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //             { title: 'cardiovascular', path: PATH_DASHBOARD.biology.cardiovascular, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //             { title: 'excretory', path: PATH_DASHBOARD.biology.excretory, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //           ], icon: <Iconify icon="vscode-icons:file-type-registry" />
      //         },
      //         {
      //           title: 'Sinh trưởng và phát triển ở sinh vật', path: '', icon: <Iconify icon="ion:school-outline" />, children: [
      //             { title: 'pollen', path: PATH_DASHBOARD.biology.pollen, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //             { title: 'embryo_sac', path: PATH_DASHBOARD.biology.embryo_sac, icon: <Iconify icon="vscode-icons:file-type-manifest" /> }
      //           ], icon: <Iconify icon="vscode-icons:file-type-registry" />
      //         },

           
      //   ],
      // },
      // {
      //   title: 'biology',
      //   path: PATH_DASHBOARD.biology.root,
      //   icon: <Icon icon="ic:baseline-biotech" />,
      //   children: [
      //     // { title: 'hiv_cells', path: PATH_DASHBOARD.biology.hiv_cells, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'prokaryotic', path: PATH_DASHBOARD.biology.prokaryotic, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'eukaryotic', path: PATH_DASHBOARD.biology.eukaryotic, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'hepatitisB', path: PATH_DASHBOARD.biology.hepatitisB, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'cardiovascular', path: PATH_DASHBOARD.biology.cardiovascular, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'excretory', path: PATH_DASHBOARD.biology.excretory, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'metabolism_in_plants', path: PATH_DASHBOARD.biology.metabolism_in_plants, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'pollen', path: PATH_DASHBOARD.biology.pollen, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'republishADN', path: PATH_DASHBOARD.biology.republish_adn, icon: <Iconify icon="vscode-icons:file-type-manifest" /> },
      //     // { title: 'embryo_sac', path: PATH_DASHBOARD.biology.embryo_sac, icon: <Iconify icon="vscode-icons:file-type-manifest" /> }
      //   ],
      // },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'management',
  //   items: [
  //     // USER
  //     {
  //       title: 'user',
  //       path: PATH_DASHBOARD.user.root,
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'profile', path: PATH_DASHBOARD.user.profile },
  //         { title: 'cards', path: PATH_DASHBOARD.user.cards },
  //         { title: 'list', path: PATH_DASHBOARD.user.list },
  //         { title: 'create', path: PATH_DASHBOARD.user.new },
  //         { title: 'edit', path: PATH_DASHBOARD.user.demoEdit },
  //         { title: 'account', path: PATH_DASHBOARD.user.account },
  //       ],
  //     },

  //     // E-COMMERCE
  //     {
  //       title: 'ecommerce',
  //       path: PATH_DASHBOARD.eCommerce.root,
  //       icon: ICONS.cart,
  //       children: [
  //         { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
  //         { title: 'product', path: PATH_DASHBOARD.eCommerce.demoView },
  //         { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
  //         { title: 'create', path: PATH_DASHBOARD.eCommerce.new },
  //         { title: 'edit', path: PATH_DASHBOARD.eCommerce.demoEdit },
  //         { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
  //       ],
  //     },

  //     // INVOICE
  //     {
  //       title: 'invoice',
  //       path: PATH_DASHBOARD.invoice.root,
  //       icon: ICONS.invoice,
  //       children: [
  //         { title: 'list', path: PATH_DASHBOARD.invoice.list },
  //         { title: 'details', path: PATH_DASHBOARD.invoice.demoView },
  //         { title: 'create', path: PATH_DASHBOARD.invoice.new },
  //         { title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit },
  //       ],
  //     },

  //     // BLOG
  //     {
  //       title: 'blog',
  //       path: PATH_DASHBOARD.blog.root,
  //       icon: ICONS.blog,
  //       children: [
  //         { title: 'posts', path: PATH_DASHBOARD.blog.posts },
  //         { title: 'post', path: PATH_DASHBOARD.blog.demoView },
  //         { title: 'create', path: PATH_DASHBOARD.blog.new },
  //       ],
  //     },
  //   ],
  // },

  // APP
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'app',
  //   items: [
  //     {
  //       title: 'mail',
  //       path: PATH_DASHBOARD.mail.root,
  //       icon: ICONS.mail,
  //       info: <Label color="error">+32</Label>,
  //     },
  //     { title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
  //     { title: 'calendar', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar },
  //     { title: 'kanban', path: PATH_DASHBOARD.kanban, icon: ICONS.kanban },
  //   ],
  // },

  // DEMO MENU STATES
  // {
  //   subheader: 'Other cases',
  //   items: [
  //     {
  //       // default roles : All roles can see this entry.
  //       // roles: ['user'] Only users can see this item.
  //       // roles: ['admin'] Only admin can see this item.
  //       // roles: ['admin', 'manager'] Only admin/manager can see this item.
  //       // Reference from 'src/guards/RoleBasedGuard'.
  //       title: 'item_by_roles',
  //       path: PATH_DASHBOARD.permissionDenied,
  //       icon: ICONS.menuItem,
  //       roles: ['admin'],
  //       caption: 'only_admin_can_see_this_item',
  //     },
  //     {
  //       title: 'menu_level_1',
  //       path: '#1',
  //       icon: ICONS.menuItem,
  //       children: [
  //         { title: 'menu_level_2', path: '#2', disabled: true },
  //         {
  //           title: 'menu_level_2',
  //           path: '#3',
  //           children: [
  //             { title: 'menu_level_3', path: '#4' },
  //             { title: 'menu_level_3', path: '#5' },
  //           ],
  //         },
  //       ],
  //     },
  //     { title: 'item_disabled', path: '#disabled', icon: ICONS.menuItem, disabled: true },
  //     {
  //       title: 'item_label',
  //       path: '#label',
  //       icon: ICONS.menuItem,
  //       info: (
  //         <Label color="info" startIcon={<Iconify icon="eva:email-fill" />}>
  //           NEW
  //         </Label>
  //       ),
  //     },
  //     { title: 'item_caption', path: '#caption', icon: ICONS.menuItem, caption: 'description' },
]
//   },
// ];

export default navConfig;
