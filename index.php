<?php
@include_once __DIR__ . '/lib/functions.php';

Kirby::plugin('f-mahler/kirby-vercel', [
  'options' => [
    'deployurl' => 'defaultValue',
    'deployurlstaging' => 'defaultValue',
    'token' => 'default',
    'projectid' => 'default',
    'hooks' => null,
    'cache' => true,
  ],
  'fields' => [
      'vercel' => [
        'props' => [
          'label' => function ($value = "Vercel") {
            return $value;
          },
          'deploy' => function ($value = "Deploy") {
            return $value;
          },
          'loading' => function ($value = "Deploying...") {
            return $value;
          },
          'complete' => function ($value = "Complete") {
            return $value;
          },
          'error' => function ($value = "Failed to deploy") {
            return $value;
          },
          'button' => function ($value = true) {
            return $value;
          },
          'help' => function ($value = false) {
            return $value;
          },
        ],
        'computed' => [
          'siteModified' => function () {
            $cache = kirby()->cache('f-mahler.kirby-vercel');
            $modified = [
              'timestamp' => $cache->get('timestamp'),
              'count' => $cache->get('count')
            ];
            return $modified;
          }
        ]
      ],
      'vercelstaging' => [
        'props' => [
          'label' => function ($value = "Vercel Staging") {
            return $value;
          },
          'deploy' => function ($value = "Deploy to Staging") {
            return $value;
          },
          'loading' => function ($value = "Deploying to Staging...") {
            return $value;
          },
          'complete' => function ($value = "Complete") {
            return $value;
          },
          'error' => function ($value = "Failed to deploy to staging") {
            return $value;
          },
          'button' => function ($value = true) {
            return $value;
          },
          'help' => function ($value = false) {
            return $value;
          },
        ],
        'computed' => [
          'siteModified' => function () {
            $cache = kirby()->cache('f-mahler.kirby-vercel');
            $modified = [
              'timestamp' => $cache->get('timestamp'),
              'count' => $cache->get('count')
            ];
            return $modified;
          }
        ]
      ]
  ],
  'hooks' => @include_once __DIR__ . '/lib/hooks.php',
  'api' => [
    'routes' => [
      [
        'pattern' => 'vercel',
        'action'  => function() {
          return Lib\KirbyVercel\Functions::deploy();
        }
      ],
      [
        'pattern' => 'vercelstaging',
        'action'  => function() {
          return Lib\KirbyVercel\Functions::deployStaging();
        }
      ],
      [
        'pattern' => 'vercel/latest',
        'action'  => function() {
          return Lib\KirbyVercel\Functions::latest();
        }
      ],
    ]
  ]
]);
