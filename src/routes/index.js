import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// config
import { PATH_AFTER_LOGIN } from '../config';
// components
import LoadingScreen from '../components/LoadingScreen';
import Capacitor from 'src/pages/dashboard/Capacitor';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'new-password', element: <NewPassword /> },
        { path: 'verify', element: <VerifyCode /> },
      ],
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'app', element: <GeneralApp /> },
        { path: 'ecommerce', element: <GeneralEcommerce /> },
        { path: 'analytics', element: <GeneralAnalytics /> },
        { path: 'banking', element: <GeneralBanking /> },
        { path: 'booking', element: <GeneralBooking /> },

        // Bỏ
        // {
        //   path: 'e-commerce',
        //   children: [
        //     { element: <Navigate to="/dashboard/e-commerce/shop" replace />, index: true },
        //     { path: 'shop', element: <EcommerceShop /> },
        //     { path: 'product/:name', element: <EcommerceProductDetails /> },
        //     { path: 'list', element: <EcommerceProductList /> },
        //     { path: 'product/new', element: <EcommerceProductCreate /> },
        //     { path: 'product/:name/edit', element: <EcommerceProductCreate /> },
        //     { path: 'checkout', element: <EcommerceCheckout /> },
        //   ],
        // },

        {
          path: 'seven-grade',
          children: [
            { element: <Navigate to="/dashboard/seven-grade/transport_water_in_plants" replace />, index: true },
            { path: 'magnet', element: <Magnet /> },
            { path: 'earth-magnetic', element: <EarthMagnetic /> },
            { path: 'rutherford', element: <Rutherford /> },
            { path: 'bohr', element: <Bohr /> },
            { path: 'oxi', element: <Oxi /> },
            { path: 'hydro', element: <Hydro /> },
            { path: 'clo', element: <Clo /> },
            { path: 'co2', element: <Co2 /> },
            { path: 'cu', element: <Cu /> },
            { path: 'h2o', element: <H2O /> },
            { path: 'nito', element: <N2 /> },
            { path: 'nacl', element: <Natriclorua /> },
            { path: 'nh3', element: <NH3 /> },
            { path: 'sound_wave_travel_is_air', element: <SoundWaveTravelIsAir /> },
            { path: 'sound_wave_travel_is_water', element: <SoundWaveTravelIsWater /> },
            { path: 'sound_wave_travel_is_solids', element: <SoundWaveTravelIsSolids /> },
            { path: 'transport_water_in_plants', element: <TransportWaterInPlants /> },
            { path: 'transport_water_in_roots', element: <TransportWaterInRoots /> },
            { path: 'root_structure', element: <RootStructure /> },
            { path: 'feather_sucker', element: <FeatherSucker /> },
          ],
        },
        {
          path: 'eight-grade',
          children: [
            { element: <Navigate to="/dashboard/seven-grade/digestive" replace />, index: true },
            { path: 'digestive', element: <Digestive /> },
            { path: 'earth-magnetic', element: <EarthMagnetic /> },
            { path: 'circulatory', element: <Circulatory /> },
            { path: 'respiratory', element: <Respiratory /> },
            { path: 'nerve', element: <Nerve /> },
            { path: 'ear_structure', element: <EarStructure /> },
          ],
        },
        {
          path: 'seven-nine',
          children: [
            { element: <Navigate to="/dashboard/seven-nine/ethylic-alcohol" replace />, index: true },
            { path: 'ethylic-alcohol', element: <EthylicAlcohol /> },
            { path: 'fructozo', element: <Fructozo /> },
            { path: 'acetic-acid', element: <AceticAcid /> },
            { path: 'glucozo', element: <Glucozo /> },
            { path: 'ethane', element: <Ethane /> },
            { path: 'cementkiln', element: <Cementkiln /> },
            { path: 'cast_iron_furmace', element: <CastIronFurnace /> },
          ],
        },
        {
          path: 'physics',
          children: [
            { element: <Navigate to="/dashboard/physics/circulatory" replace />, index: true },
            { path: 'lunar-eclipse', element: <LunarEclipse /> },
            { path: 'starmap', element: <Starmap /> },
            { path: 'solar_system', element: <SolarSystem /> },
            { path: 'electrical_circuit', element: <ElectricalCircuit /> },
            { path: 'capacitor', element: <Capacitor /> },
            { path: 'nuclear_structure', element: <NuclearStructure /> },
            { path: 'resonance_oscillation', element: <ResonanceOscillation /> },
            { path: 'simple_pendulum_descending', element: <SimplePendulumDescending /> },
            { path: 'simple_pendulum_descending_in_oil', element: <SimplePendulumDescendingInOil /> },
            { path: 'simple_pendulum_descending_in_water', element: <SimplePendulumDescendingInWater /> },
            { path: 'forced_oscillation', element: <ForcedOscillation /> },
            { path: 'fades_in_water', element: <FadesInWater /> },
            { path: 'fades_in_oil', element: <FadesInOil /> },
            { path: 'fades_in_air', element: <FadesInAir /> },
            { path: 'eclipse', element: <Eclipse /> },
            { path: 'tide', element: <Tide /> },
            { path: 'gravitational_magnetic_field', element: <GravitationalMagneticField /> },
            { path: 'xray', element: <XRay /> },
            { path: 'light_reflection', element: <LightReflection /> },
            { path: 'light_refraction', element: <LightRefraction /> },
            { path: 'light_dispersion', element: <LightDispersion /> },
            { path: 'simulate_earth_sun_moon', element: <SimulateEarthSunMoon /> },
          ],
        },
        {
          path: 'chemistry',
          children: [
            { element: <Navigate to="/dashboard/chemistry/saccarozo" replace />, index: true },
            { path: 'saccarozo', element: <Saccarozo /> },
            { path: 'ester', element: <Ester /> },
            { path: 'methane', element: <Methane /> },
            { path: 'acid_acetic', element: <AcidAcetic /> },
            { path: 'amino_acid', element: <AminoAcid /> },
            { path: 'anilin', element: <Anilin /> },
            { path: 'acetylene', element: <Acetylene /> },
            { path: 'benzen', element: <Benzen /> },
            { path: 'electrolytic_cell', element: <ElectrolyticCell /> },
            { path: 'ethanal', element: <Ethanal /> },
            { path: 'ethylene', element: <Ethylene /> },
            { path: 'ethylic_ancohol', element: <EthylicAncohol /> },
            { path: 'maltose', element: <Maltose /> },
            { path: 'methanal', element: <Methanal /> },
            { path: 'methanol', element: <Methanol /> },
            { path: 'methylamine', element: <Methylamine /> },
            { path: 'phenol', element: <Phenol /> },
            { path: 'battery', element: <Battery /> },
            { path: 'protein', element: <Protein /> },
            { path: 'starch', element: <Starch /> },
            { path: 'creation_process_starch', element: <CreationProcessStarch /> },
            { path: 'saponification', element: <Saponification /> },
            { path: 'ethylacetate', element: <EthylAcetate /> },
            { path: 'benzen_nitrification', element: <BenzenNitrification /> },
            { path: 'hydrolyis_of_cellulose', element: <HydrolysisOfCellulose /> },
            { path: 'starch_hydrolyzate', element: <StarchHydrolyzate /> },
            { path: 'hydrolyzed_ethyl_bromide', element: <HydrolyzedEthylBromide /> }
          ],
        },
        {
          path: 'biology',
          children: [
            { element: <Navigate to="/dashboard/biology/hiv_cells" replace />, index: true },
            { path: 'hiv_cells', element: <HIVCells /> },
            { path: 'prokaryotic', element: <Prokaryotic /> },
            { path: 'eukaryotic', element: <Eukaryotic /> },
            { path: 'hepatitisB', element: <HepatitisB /> },
            { path: 'cardiovascular', element: <Cardiovascular /> },
            { path: 'excretory', element: <Excretory /> },
            { path: 'metabolism_in_plants', element: <MetabolismInPlants /> },
            { path: 'pollen', element: <Pollen /> },
            { path: 'republish_adn', element: <RepublishADN /> },
            { path: 'embryo_sac', element: <EmbryoSac /> },
          ],
        },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
            { path: 'profile', element: <UserProfile /> },
            { path: 'cards', element: <UserCards /> },
            { path: 'list', element: <UserList /> },
            { path: 'new', element: <UserCreate /> },
            { path: ':name/edit', element: <UserCreate /> },
            { path: 'account', element: <UserAccount /> },
          ],
        },
        // {
        //   path: 'invoice',
        //   children: [
        //     { element: <Navigate to="/dashboard/invoice/list" replace />, index: true },
        //     { path: 'list', element: <InvoiceList /> },
        //     { path: ':id', element: <InvoiceDetails /> },
        //     { path: ':id/edit', element: <InvoiceEdit /> },
        //     { path: 'new', element: <InvoiceCreate /> },
        //   ],
        // },
        {
          path: 'blog',
          children: [
            { element: <Navigate to="/dashboard/blog/posts" replace />, index: true },
            { path: 'posts', element: <BlogPosts /> },
            { path: 'post/:title', element: <BlogPost /> },
            { path: 'new', element: <BlogNewPost /> },
          ],
        },
        {
          path: 'mail',
          children: [
            { element: <Navigate to="/dashboard/mail/all" replace />, index: true },
            { path: 'label/:customLabel', element: <Mail /> },
            { path: 'label/:customLabel/:mailId', element: <Mail /> },
            { path: ':systemLabel', element: <Mail /> },
            { path: ':systemLabel/:mailId', element: <Mail /> },
          ],
        },
        {
          path: 'chat',
          children: [
            { element: <Chat />, index: true },
            { path: 'new', element: <Chat /> },
            { path: ':conversationKey', element: <Chat /> },
          ],
        },
        { path: 'calendar', element: <Calendar /> },
        { path: 'kanban', element: <Kanban /> },
        { path: 'permission-denied', element: <PermissionDenied /> },
      ],
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'payment', element: <Payment /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      // element: <MainLayout />,
      children: [
        //  { element: <HomePage />, index: true },
        { element: <Navigate to="/dashboard/seven-grade/transport_water_in_plants" replace />, index: true },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));
const NewPassword = Loadable(lazy(() => import('../pages/auth/NewPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/auth/VerifyCode')));

// DASHBOARD

// GENERAL
const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')));
const GeneralEcommerce = Loadable(lazy(() => import('../pages/dashboard/GeneralEcommerce')));
const GeneralAnalytics = Loadable(lazy(() => import('../pages/dashboard/GeneralAnalytics')));
const GeneralBanking = Loadable(lazy(() => import('../pages/dashboard/GeneralBanking')));
const GeneralBooking = Loadable(lazy(() => import('../pages/dashboard/GeneralBooking')));

// ECOMMERCE
// const EcommerceShop = Loadable(lazy(() => import('../pages/dashboard/EcommerceShop')));
// const EcommerceProductDetails = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductDetails')));
// const EcommerceProductList = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductList')));
// const EcommerceProductCreate = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductCreate')));
// const EcommerceCheckout = Loadable(lazy(() => import('../pages/dashboard/EcommerceCheckout')));

// INVOICE
// const InvoiceList = Loadable(lazy(() => import('../pages/dashboard/InvoiceList')));
// const InvoiceDetails = Loadable(lazy(() => import('../pages/dashboard/InvoiceDetails')));
// const InvoiceCreate = Loadable(lazy(() => import('../pages/dashboard/InvoiceCreate')));
// const InvoiceEdit = Loadable(lazy(() => import('../pages/dashboard/InvoiceEdit')));

// BLOG
const BlogPosts = Loadable(lazy(() => import('../pages/dashboard/BlogPosts')));
const BlogPost = Loadable(lazy(() => import('../pages/dashboard/BlogPost')));
const BlogNewPost = Loadable(lazy(() => import('../pages/dashboard/BlogNewPost')));

// USER
const UserProfile = Loadable(lazy(() => import('../pages/dashboard/UserProfile')));
const UserCards = Loadable(lazy(() => import('../pages/dashboard/UserCards')));
const UserList = Loadable(lazy(() => import('../pages/dashboard/UserList')));
const UserAccount = Loadable(lazy(() => import('../pages/dashboard/UserAccount')));
const UserCreate = Loadable(lazy(() => import('../pages/dashboard/UserCreate')));

// APP
const Chat = Loadable(lazy(() => import('../pages/dashboard/Chat')));
const Mail = Loadable(lazy(() => import('../pages/dashboard/Mail')));
const Calendar = Loadable(lazy(() => import('../pages/dashboard/Calendar')));
const Kanban = Loadable(lazy(() => import('../pages/dashboard/Kanban')));

// TEST RENDER PAGE BY ROLE
const PermissionDenied = Loadable(lazy(() => import('../pages/dashboard/PermissionDenied')));

// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const About = Loadable(lazy(() => import('../pages/About')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
const Pricing = Loadable(lazy(() => import('../pages/Pricing')));
const Payment = Loadable(lazy(() => import('../pages/Payment')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const Page403 = Loadable(lazy(() => import('../pages/Page403')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));

// GRADE 7
const Magnet = Loadable(lazy(() => import('../pages/dashboard/Magnet')));
const EarthMagnetic = Loadable(lazy(() => import('../pages/dashboard/EarthMagnetic')));
const Rutherford = Loadable(lazy(() => import('../pages/dashboard/Rutherford')));
const Bohr = Loadable(lazy(() => import('../pages/dashboard/Bohr')));
const Oxi = Loadable(lazy(() => import('../pages/dashboard/Oxi')));
const Hydro = Loadable(lazy(() => import('../pages/dashboard/Hydro')));
const Clo = Loadable(lazy(() => import('../pages/dashboard/Clo')));
const Co2 = Loadable(lazy(() => import('../pages/dashboard/Co2')));
const Cu = Loadable(lazy(() => import('../pages/dashboard/Cu')));
const H2O = Loadable(lazy(() => import('../pages/dashboard/H2O')));
const N2 = Loadable(lazy(() => import('../pages/dashboard/N2')));
const Natriclorua = Loadable(lazy(() => import('../pages/dashboard/Natriclorua')));
const NH3 = Loadable(lazy(() => import('../pages/dashboard/NH3')));
const SoundWaveTravelIsAir = Loadable(lazy(() => import('../pages/dashboard/SoundWaveTravelIsAir')));
const SoundWaveTravelIsWater = Loadable(lazy(() => import('../pages/dashboard/SoundWaveTravelIsWater')));
const SoundWaveTravelIsSolids = Loadable(lazy(() => import('../pages/dashboard/SoundWaveTravelIsSolids')));
const TransportWaterInPlants = Loadable(lazy(() => import('../pages/dashboard/TransportWaterInPlants')));
const TransportWaterInRoots = Loadable(lazy(() => import('../pages/dashboard/TransportWaterInRoots')));
const FeatherSucker = Loadable(lazy(() => import('../pages/dashboard/FeatherSucker')));
const RootStructure = Loadable(lazy(() => import('../pages/dashboard/RootStructure')));

// GRADE 8
const Digestive = Loadable(lazy(() => import('../pages/dashboard/Digestive')));
const Circulatory = Loadable(lazy(() => import('../pages/dashboard/Circulatory')));
const Respiratory = Loadable(lazy(() => import('../pages/dashboard/Respiratory')));
const Nerve = Loadable(lazy(() => import('../pages/dashboard/Nerve')));
const EarStructure = Loadable(lazy(() => import('../pages/dashboard/EarStructure')));

// GRADE 9
const EthylicAlcohol = Loadable(lazy(() => import('../pages/dashboard/EthylicAcohol')));
const Fructozo = Loadable(lazy(() => import('../pages/dashboard/Fructozo')));
const AceticAcid = Loadable(lazy(() => import('../pages/dashboard/AceticAcid')));
const Glucozo = Loadable(lazy(() => import('../pages/dashboard/Glucozo')));
const Ethane = Loadable(lazy(() => import('../pages/dashboard/Ethane')));
const Cementkiln = Loadable(lazy(() => import('../pages/dashboard/CementKiln')));
const CastIronFurnace = Loadable(lazy(() => import('../pages/dashboard/CastIronFurnace')));

// Physics
const LunarEclipse = Loadable(lazy(() => import('../pages/dashboard/LunarEclipse')));
const Starmap = Loadable(lazy(() => import('../pages/dashboard/Starmap')));
const ElectricalCircuit = Loadable(lazy(() => import('../pages/dashboard/ElectricalCircuit')));
const SolarSystem = Loadable(lazy(() => import('../pages/dashboard/SolarSystem')));
const NuclearStructure = Loadable(lazy(() => import('../pages/dashboard/NuclearStructure')));
const ResonanceOscillation = Loadable(lazy(() => import('../pages/dashboard/ResonanceOscillation')));
const SimplePendulumDescending = Loadable(lazy(() => import('../pages/dashboard/SimplePendulumDescending')));
const SimplePendulumDescendingInOil = Loadable(lazy(() => import('../pages/dashboard/SimplePendulumDescendingInOil')));
const SimplePendulumDescendingInWater = Loadable(lazy(() => import('../pages/dashboard/SimplePendulumDescendingInWater'))
);
const ForcedOscillation = Loadable(lazy(() => import('../pages/dashboard/ForcedOscillation')));
const FadesInWater = Loadable(lazy(() => import('../pages/dashboard/FadesInWater')));
const FadesInOil = Loadable(lazy(() => import('../pages/dashboard/FadesInOil')));
const FadesInAir = Loadable(lazy(() => import('../pages/dashboard/FadesInAir')));
const Eclipse = Loadable(lazy(() => import('../pages/dashboard/Eclipse')));
const Tide = Loadable(lazy(() => import('../pages/dashboard/Tide')));
const GravitationalMagneticField = Loadable(lazy(() => import('../pages/dashboard/GravitationalMagneticField')));
const XRay = Loadable(lazy(() => import('../pages/dashboard/XRay')));
const LightReflection = Loadable(lazy(() => import('../pages/dashboard/LightReflection')));
const LightRefraction = Loadable(lazy(() => import('../pages/dashboard/LightRefraction')));
const LightDispersion = Loadable(lazy(() => import('../pages/dashboard/LightDispersion')));
const SimulateEarthSunMoon = Loadable(lazy(() => import('../pages/dashboard/SimulateEarthSunMoon')));

// Chemistry
const Saccarozo = Loadable(lazy(() => import('../pages/dashboard/Saccarozo')));
const Ester = Loadable(lazy(() => import('../pages/dashboard/Ester')));
const Methane = Loadable(lazy(() => import('../pages/dashboard/Methane')));
const AcidAcetic = Loadable(lazy(() => import('../pages/dashboard/AcidAcetic')));
const AminoAcid = Loadable(lazy(() => import('../pages/dashboard/Aminoacid')));
const Anilin = Loadable(lazy(() => import('../pages/dashboard/Anilin')));
const Acetylene = Loadable(lazy(() => import('../pages/dashboard/Axetylen')));
const Benzen = Loadable(lazy(() => import('../pages/dashboard/Benzen')));
const ElectrolyticCell = Loadable(lazy(() => import('../pages/dashboard/ElectrolyticCell')));
const Ethanal = Loadable(lazy(() => import('../pages/dashboard/Ethanal')));
const Ethylene = Loadable(lazy(() => import('../pages/dashboard/Ethylene')));
const EthylicAncohol = Loadable(lazy(() => import('../pages/dashboard/EthylicAncohol')));
const Maltose = Loadable(lazy(() => import('../pages/dashboard/Maltose')));
const Methanal = Loadable(lazy(() => import('../pages/dashboard/Methanal')));
const Methanol = Loadable(lazy(() => import('../pages/dashboard/Methanol')));
const Methylamine = Loadable(lazy(() => import('../pages/dashboard/Methylamine')));
const Phenol = Loadable(lazy(() => import('../pages/dashboard/Phenol')));
const Battery = Loadable(lazy(() => import('../pages/dashboard/Battery')));
const Protein = Loadable(lazy(() => import('../pages/dashboard/Protein')));
const Starch = Loadable(lazy(() => import('../pages/dashboard/Starch')));
const CreationProcessStarch = Loadable(lazy(() => import('../pages/dashboard/CreationProcessStarch')));
const Saponification = Loadable(lazy(() => import('../pages/dashboard/Saponification')));
const EthylAcetate = Loadable(lazy(() => import('../pages/dashboard/Ethylacetate')));
const BenzenNitrification = Loadable(lazy(() => import('../pages/dashboard/BenzenNitrification')));
const HydrolysisOfCellulose = Loadable(lazy(() => import('../pages/dashboard/HydrolysisOfCellulose')));
const StarchHydrolyzate = Loadable(lazy(() => import('../pages/dashboard/StarchHydrolyzate')));
const HydrolyzedEthylBromide = Loadable(lazy(() => import('../pages/dashboard/HydrolyzedEthylBromide')));
// Biology
const HIVCells = Loadable(lazy(() => import('../pages/dashboard/HIVCells')));
const Prokaryotic = Loadable(lazy(() => import('../pages/dashboard/Prokaryotic')));
const Eukaryotic = Loadable(lazy(() => import('../pages/dashboard/Eukaryotic')));
const HepatitisB = Loadable(lazy(() => import('../pages/dashboard/HepatitisB')));
const Cardiovascular = Loadable(lazy(() => import('../pages/dashboard/Cardiovascular')));
const Excretory = Loadable(lazy(() => import('../pages/dashboard/Excretory')));
const MetabolismInPlants = Loadable(lazy(() => import('../pages/dashboard/MetabolismInPlants')));
const Pollen = Loadable(lazy(() => import('../pages/dashboard/Pollen')));
const RepublishADN = Loadable(lazy(() => import('../pages/dashboard/RepublishADN')));
const EmbryoSac = Loadable(lazy(() => import('../pages/dashboard/EmbryoSac')));
