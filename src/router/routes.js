
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/materiels',
        component: () => import('pages/montage_de_plaque/Materiels.vue')
      },
      {
        path: '/cables',
        component: () => import('pages/montage_de_plaque/Cables.vue')
      },
      {
        path: '/fixationCables',
        component: () => import('pages/montage_de_plaque/FixationCables.vue')
      },
      {
        path: '/positionAdhésif',
        component: () => import('pages/montage_de_plaque/PositionAdhesif.vue')
      },
      {
        path: '/collage',
        component: () => import('pages/montage_de_plaque/Collage.vue')
      },
      {
        path: '/miseEnPlace',
        component: () => import('pages/montage_de_plaque/MiseEnPlace.vue')
      } ,
      {
        path: '/verificationCables',
        component: () => import('pages/montage_de_plaque/VerificationCables.vue')
      } ,
      {
        path: '/adhésifDeProtection',
        component: () => import('pages/montage_de_plaque/AdhesifDeProtection.vue')
      } ,
      {
        path: '/packaging',
        component: () => import('pages/montage_de_plaque/Packaging.vue')
      } ,
      {
        path: '/configBase',
        component: () => import('pages/configuration_PC/ConfigBase.vue')
      } ,
      {
        path: '/navigation',
        component: () => import('pages/configuration_PC/Navigation.vue')
      } ,
      {
        path: '/TeamViewer',
        component: () => import('pages/configuration_PC/TeamViewer.vue')
      } ,
      {
        path: '/quickSupport',
        component: () => import('pages/configuration_PC/QuickSupport.vue')
      } ,
      {
        path: '/kidsPlace',
        component: () => import('pages/configuration_PC/contrôle_parental/KidsPlace.vue')
      } ,
      {
        path: '/motdepasse',
        component: () => import('pages/configuration_PC/contrôle_parental/MotDePasse.vue')
      } ,
      {
        path: '/compteKiddoware',
        component: () => import('pages/configuration_PC/contrôle_parental/CompteKiddoware.vue')
      },
      {
        path: '/autorisation',
        component: () => import('pages/configuration_PC/contrôle_parental/Autorisation.vue')
      }, 
      {
        path: '/save',
        component: () => import('pages/configuration_PC/Save.vue')
      } ,
      {
        path: '/parametres',
        component: () => import('pages/configuration_PC/contrôle_parental/Parametres.vue')
      } ,
      {
        path: '/verification',
        component: () => import('pages/configuration_PC/Verification.vue')
      } ,
      {
        path: '/parametreInterface',
        component: () => import('pages/configuration_PC/ParametreInterface.vue')
      },
      {
        path: '/parametreAvances',
        component: () => import('pages/configuration_PC/ParametreAvances.vue')
      },
        {
        path: '/applications',
        component: () => import('pages/configuration_PC/Applications.vue')
      } ,
      {
        path: '/gestionUtilisateur',
        component: () => import('pages/configuration_PC/GestionUtilisateur.vue')
      },
      {
        path: '/extinction',
        component: () => import('pages/configuration_PC/Extinction.vue')
      } ,
      {
        path: '/faq',
        component: () => import('pages/FAQ.vue')
      } ,
      {
        path: '/sav',
        component: () => import('pages/SAV.vue')
      } ,
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
