// This is only for personal accounts
// Example:
// https://vk.com/tutberidze.eteri

// Refer to:
// https://dev.vk.com/en/method/wall.get

// API url example:
// https://api.vk.com/method/wall.get?owner_id=tutberidze.eteri&count=20&access_token=ACCESS_TOKEN&v=5.131

// API example response:

// {
//     "response": {
//       "count": 74,
//       "items": [
//         {
//           "inner_type": "wall_wallpost",
//   ...
// }
// }

// Each Item:
// {
// ...
//     "attachments": [
// ...
//     ],
//     "date": 1741546333,
//     "edited": 1741546346,
//  ...
//     "text": "Приглашаю вас на ледовое шоу #TeamTutberidze! \n\nВас ждут новые истории и легендарные программы в исполнении одних из лучших фигуристов в мире.\n\nЖду встречи с каждым из вас в 11 городах!\n\nСсылка на билеты в шапке профиля.",
//     "views": {
//       "count": 1601
//     }
//   },

// Photo Attachments:
//       {
//         "type": "photo",
//         "photo": {
//          ...
//           "sizes": [
//             {
//               "height": 75,
//               "type": "s",
//               "width": 75,
//               "url": "https://sun6-21.userapi.com/s/v1/ig2/GYs-E55vvY2132z9DgSoTvPO0Sk0Iely8Tp5RSZZB_wEMwfsZCWaM_pJUHuZm4W0l_NaaRQGT-e5m1Y3dOfrxqMx.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&from=bu&cs=75x75"
//             },
//          ...
//           ],
//           "orig_photo": {
//             "height": 1080,
//             "type": "base",
//             "url": "https://sun6-21.userapi.com/s/v1/ig2/GYs-E55vvY2132z9DgSoTvPO0Sk0Iely8Tp5RSZZB_wEMwfsZCWaM_pJUHuZm4W0l_NaaRQGT-e5m1Y3dOfrxqMx.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&from=bu",
//             "width": 1080
//           }
//         }
//       }

// Video Attachments:
// Construct the url: https://vk.com/video643779055_456241376
// Embed Example:
// <iframe src="https://vk.com/video_ext.php?oid=643779055&id=456241376&hd=2&autoplay=1"
// width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;
// screen-wake-lock;" frameborder="0" allowfullscreen></iframe>

// "attachments": [
//     {
//       "type": "video",
//       "video": {
// ...
//         "image": [
//           {
// ...
//         ],
//         "first_frame": [
//           {
// ...
//         ],
//         "width": 720,
//         "height": 1280,
//         "id": 456241376,
//         "owner_id": 643779055,
//         "title": "Видео от Этери Тутберидзе",
// ...


// Function params:
// username, API_KEY

// Function return:
// title, link, date, article html(text, images, videos)