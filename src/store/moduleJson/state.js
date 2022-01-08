export default function () {
  return {
    //

    MenuJson : [
      {
        label: "Montage de plaque",
        icon: "menu",  
        color: "indigo",
        bgColor: "indigo-4",
        children: [
          {
            label: "Materiels",
            icon: "highlight",
            to: "/materiels"
          },
          {
            label: "Plaques & cables",
            icon: "usb",
            to: "/cables"
          },
          {
            label: "Fixation des câbles et mini PC",
            icon: "settings_input_component",
            to: "/fixationCables"
          },
          {
            label: "Positionnement adhésif",
            icon: "format_paint",
            to: "/positionAdhésif"
          },
          {
            label: "Collage alimentation de l'écran",
            icon: "settings_overscan",
            to: "/collage"
          },
          {
            label: "Adhésif de protection",
            icon: "healing",
            to: "/adhésifDeProtection"
            
          },
          {
            label: "Vérification cablages du mini PC",
            icon: "settings_input_hdmi",
            to: "/verificationCables"
          },
          {
            label: "Mise en place | Accroche des câbles",
            icon: "settings_input_svideo",
            to: "/miseEnPlace"
          },
          {
            label: "Embalage des tables ",
            icon: "redeem",
            to: "/packaging"
          }
        ]
      },
      {
        label: "Configuration Mini pc ",
        icon: "menu", 
        color: "orange",
        bgColor: "deep-orange-5",
        children: [
          {
            label: "Configuration de base",
            icon: "verified",
            to: "/configBase"
          },
          {
            label: "Navigation personnalisée",
            icon: "more_horiz",
            to: "/navigation"
          },
          {
            label: "Team Viewer",
            icon: "swap_horizontal_circle",
            to: "/teamViewer"
          },
          {
            label: "Contrôle parental",
            icon: "supervisor_account",
            
            children: [
              {
                label: "Kids Place ",
                icon: "keyboard_arrow_right",
                to: "/kidsPlace"
              },
              {
                label: "Mot de passe ",
                icon: "keyboard_arrow_right",
                to: "/motdepasse"
              },
              {
                label: "Lier le compte kiddoware",
                icon: "keyboard_arrow_right",
                to: "/compteKiddoware"
              },
              {
                label: "Autorisation et bloquage",
                icon: "keyboard_arrow_right",
                to: "/autorisation"
              }
            ]
          },
          {
            label: "Sauvegarde et restauration",
            icon: "restore",
            to: "/save"
          },
          {
            label: "Paramètres",
            icon: "settings",
            
            children: [
              {
                label: "Paramètres Contrôle parental",
                icon: "keyboard_arrow_right",
                to: "/parametres"
              },
              {
                label: "Paramètre avancés",
                icon: "keyboard_arrow_right",
                to: "/parametreAvances"
              },
              {
                label: "Paramètre interface",
                icon: "keyboard_arrow_right",
                to: "/parametreInterface",
              }
            ]
          },
          {
            label: "Gestion Utilisateur",
            icon: "account_circle",
            to: "/gestionutilisateur"
          },
          {
            label: "Jeux et applications",
            icon: "sports_esports",
            to: "/applications"
          },
          {
            label: "Extinction",
            icon: "power_settings_new",
            to: "/extinction"
          },
          {
            label: "Verfication configuration",
            icon: "library_add_check",
            to: "/verification"
          }
        ]
        
      },
      {
        label: "paramètres",
        icon: "settings_applications", 
        color: "info",
        bgColor: "blue",
        children: [
          {
            label: "FAQ",
            icon: "question_answer",
            to: "/faq"
          },
          {
            label: "SAV",
            icon: "settings_phone",
            to: "/sav"
          },
        
        ]
        
      },
      
      
    ],
    Materials: [
        {
          item: "Une plaque",
          image: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          item: "Cable usb type B",
          image: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          item: " Rallonge USB ",
          image: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          item: "Cable RJ45",
          image: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          item: "Un suppoprt pour fixer l'ordinateur",
          image: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          item: "2 vis et 2 écrous moyens",
          image: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          item: "4 petites vis",
          image: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          item: "Une alimentation écran tactile",
          image: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          item: "3 sert flex",
          image: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          item: "2 petits supports double face",
          image: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          item: "2 morceaux d'adhésifs double face ",
          image: "https://cdn.quasar.dev/img/parallax2.jpg"
        }
    ], 
    TodoList: [
        {
          todo: "Allumer le mini PC"
        },
        {
          todo: "Activer le wifi et entrer le mot de passe : HACKLABOT"
        },
        {
          todo: "Ajouter le compte : tablekids45@gmail.com "
        },
        {
          todo: "Mot de passe : tonton123 "
        },
        {
          todo: "Régler la langue en francais "
        },
        {
          todo:
            "Régler l’heure et mettre sur GMT+2 et décocher le fuseau horaire automatique."
        },
        {
          todo:
            "Ouvrir le Play store : allez dans mes jeux et application télécharger toutes les applications. "
        },
        {
          todo:
            " Attendre le temps du téléchargement et Vérifier que toutes les applications sont installées. "
        },
        {
          todo:
            "Installer Custom Navigation bar pour changer la barre de navigation. "
        },
        {
          todo: " Aller dans Paramètres > Compte > Google : Désactiver tout.  "
        }
    ],
    CheckList: [
        {
          completed: false,
          todo: "Vérifier si le WiFi s'éteint au démmarage du contrôle parental"
        },
        {
          completed: false,
          todo: "Vérifier si les pub et le bouton retour sont désactivés"
        },
        {
          completed: false,
          todo: " Vérifier si le code est 1357"
        },
        {
          completed: false,
          todo:
            "Vérifier si les comptes sont : Tous les jeux, Multijoueur et Petit -6ans"
        },
        {
          completed: false,
          todo:
            "Vérifier si lorsqu'on allume et éteint, le contrôle parental se lance"
        },
        {
          completed: false,
          todo: "Vérifier si il y a au moins 30 jeux fonctionels"
        },
        {
          completed: false,
          todo: " Vérifier la barre de navigation"
        },
        {
          completed: false,
          todo: "Vérifier si dans Comptes > Google : tous est décochés"
        },
        {
          completed: false,
          todo:
            "Vérifier si le fond d'écran est appliqué sur le bureau et le bureau du contrôle parental"
        },
        {
          completed: false,
          todo: " Vérifier la date et l'heure"
        }
    ],
    MenuFaq: [
      {
        Question: "Comment ajouter ou supprimer une application dans controle parental? ",
        Reponse: "Dans paramètre de table kids ,cliquez sur gérer les applications ,ensuite vous pouvez cocher décocher les cases qui se trouvent à coté de chaque application, pour l'ajouter ou la masquer ",
        icon: "help" 
      }, 
      {
        Question: "Comment modifier le mot de passe du controle parental ? ",
        Reponse: "Dans paramètre de table kids , cliquez sur sécurité qui se trouve sur la rubrique paramètre personnalisés, ensuite modifier le mot de passe ",
        icon: "help" 
      }, 
      
      {
        Question: "Comment quitter le controle parental? ",
        Reponse: "cliquez sur le bouton (QUITTER) en haut à droite de la page d'acceuil , ensuite saisissez le mot de passe pour quitter le contrôle parental",
        icon: "help" 
      }, 
      {
        Question: "Comment remettre le wifi ? ",
        Reponse: "Dans paramètre de table kids , cochez  ( autorisez la connexion internet). ",
        icon: "help" 
      }, 
      {
        Question: "Comment désactiver les plugins ? ",
        Reponse: "Dans paramètre de table kids, cliquez sur Plugins Kids Place et décocher ( afficher les raccoursis des plugins) ",
        icon: "help" 
      }, 
    ],
    timelineSav: [
        {
          title: "Pour commencer , appelez le client et présentez vous correctement",
          side: "left",
          desc: "un exemplaire est disponible sur la fiche du questionnaire SVA ",
          color: "red",
          icon: "call"
        },
        {
          title: "Ensuite , posez lui , les questions qui se retrouve sur le questionnaire , pour esseyez de repérer le problème",
          desc:"Prenez bien en compte l'explication du problème du client ",
          side: "left", 
          color: "orange",
          icon: "help"
        },
        {
          title: "En cas de besoin , demandez au client d'activer l'application TeamViewer , afin de prendre le controle de la Tablekids a distance  ",
          side: "left",
          color: "blue",
          icon: "swap_horizontal_circle"
        },
        {
          title: "Reglez le problème",
          side: "left",
          desc:"lorem lorem lorem ",
          color: "green",
          icon: "check_circle_outline"
        }
    ],
    questionnaire: [
        {
          label: "question 11",
          icon: "help",
          group: "",
          option: [
            {
              label: "OUI",
              value: "op1"
            },
            {
              label: "NON",
              value: "op2"
            },
            {
              label: "NB",
              value: "op3"
            }
          ]
        },
        {
          label: "question 11",
          icon: "help",
          group: "",
          option: [
            {
              label: "OUI",
              value: "op1"
            },
            {
              label: "NON",
              value: "op2"
            },
            {
              label: "NB",
              value: "op3"
            }
          ]
        },
        {
          label: "question 11",
          icon: "help",
          group: "",
          option: [
            {
              label: "OUI",
              value: "op1"
            },
            {
              label: "NON",
              value: "op2"
            },
            {
              label: "NB",
              value: "op3"
            }
          ]
        },

    ]
  }
}
