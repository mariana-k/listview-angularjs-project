(function(){
    'use strict';

    angular.module('projects')
        .service('projectService', ['$q', ProjectService]);

    /**
    * Users DataService
    * Uses embedded, hard-coded data model; acts asynchronously to simulate
    * remote data service call(s).
    *
    * @returns {{loadAll: Function}}
    * @constructor
    */
    function ProjectService($q){
        var projects = {
            'results' :
          [{
            "ID" : "00c2267d-6d2a-4d8b-d4fb-1bd7c05cda7f",
            "NAME" : "Stationary Simpson 1",
            "DESC" : "Shop",
            "CODE" : "S 2.9",
            "CD" : "1415314800000",
            "CATEGORY" : "ROOM"      
          }, {
            "ID" : "018aeef5-858f-4e14-901c-b6870db3383d",
            "NAME" : "Technical Equipment T 0.4",
            "DESC" : "Technical Equipment",
            "CODE" : "T 0.4",
            "CD" : "1415833200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "01db15dd-41a7-4877-84c0-ed10157a3009",
            "NAME" : "Jupiter 2",
            "DESC" : "Shop",
            "CODE" : "S 2.7",
            "CD" : "1415142000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "03a96462-c6fd-4a03-fcdb-520b77352334",
            "NAME" : "German Apparel 3",
            "DESC" : "Shop",
            "CODE" : "S 1.6",
            "CD" : "1413583200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "0a233b1d-57dc-4730-bb90-835c3a892205",
            "NAME" : "Technical Equipment T 1.1",
            "DESC" : "Technical Equipment",
            "CODE" : "T 1.1",
            "CD" : "1416006000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "0ab97a12-6c6e-43b2-fdd0-ef643af18896",
            "NAME" : "Hugo Chef",
            "DESC" : "Shop",
            "CODE" : "S 1.7",
            "CD" : "1413669600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "0caab232-6c57-48eb-b8e4-106aa8caa723",
            "NAME" : "König's 1",
            "DESC" : "Shop",
            "CODE" : "S 0.5",
            "CD" : "1412460000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "0e1b7c0a-43a8-447d-8c91-d86536f8c4b2",
            "NAME" : "König's 3",
            "DESC" : "Shop",
            "CODE" : "S 0.7",
            "CD" : "1412632800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "0f64d17c-0124-4f3f-c999-5ca5729fe6e4",
            "NAME" : "Storage Room SR 2.3",
            "DESC" : "Storage Room",
            "CODE" : "SR 2.3",
            "CD" : "1419202800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "113be14c-905e-4c2b-debb-528b705d2848",
            "NAME" : "Storage Room SR 1.8",
            "DESC" : "Storage Room",
            "CODE" : "SR 1.8",
            "CD" : "1418943600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "12cee303-f3c1-4ded-e0cf-8bb251c8d7ce",
            "NAME" : "Discounter 3",
            "DESC" : "Shop",
            "CODE" : "S 0.10",
            "CD" : "1412892000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "168ac807-1387-4383-d119-b4662c5a2f74",
            "NAME" : "Storage Room SR 1.2",
            "DESC" : "Storage Room",
            "CODE" : "SR 1.2",
            "CD" : "1418425200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "16b96e38-cf33-4c11-f080-013d5293712a",
            "NAME" : "Storage Room SR 2.4",
            "DESC" : "Storage Room",
            "CODE" : "SR 2.4",
            "CD" : "1419289200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "1afa7cac-493a-4b7e-a51c-64784a8cfee8",
            "NAME" : "Storage Room SR 1.7",
            "DESC" : "Storage Room",
            "CODE" : "SR 1.7",
            "CD" : "1418857200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "1b6286a7-4c95-4c80-8b64-d681fdcf31a7",
            "NAME" : "Storage Room SR 0.4",
            "DESC" : "Storage Room",
            "CODE" : "SR 0.4",
            "CD" : "1418079600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "1c2cc0ec-5317-4fce-966d-71dcae6d98c8",
            "NAME" : "Shoemaker Shoes 1",
            "DESC" : "Shop",
            "CODE" : "S 1.11",
            "CD" : "1414015200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "1d601b00-2c66-4493-c75e-6d0639c7151e",
            "NAME" : "Wanderer",
            "DESC" : "Shop",
            "CODE" : "S 1.16",
            "CD" : "1414450800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "1e0eee86-a9c9-4dc6-bc9b-f162a8478157",
            "NAME" : "Shoemaker Shoes 2",
            "DESC" : "Shop",
            "CODE" : "S 1.12",
            "CD" : "1414101600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "1e2de56d-adb5-4e82-cced-d297df59e5a8",
            "NAME" : "Storage Room SR 2.8",
            "DESC" : "Storage Room",
            "CODE" : "SR 2.8",
            "CD" : "1419634800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "1f9b64b9-98be-4ab0-fcf3-61d539860594",
            "NAME" : "Storage Room SR 2.2",
            "DESC" : "Storage Room",
            "CODE" : "SR 2.2",
            "CD" : "1419116400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "2061a0b3-ab78-46a7-be53-63f04c848825",
            "NAME" : "Sasha's S1 Food",
            "DESC" : "Cafe",
            "CODE" : "C 0.1",
            "CD" : "1416783600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "228e8f5e-edf4-4278-db9d-75945d515e55",
            "NAME" : "Shoemaker Shoes 3",
            "DESC" : "Shop",
            "CODE" : "S 1.13",
            "CD" : "1414188000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "261eb9ca-d0dc-4a38-ecec-bf1cc2e4521e",
            "NAME" : "FixFox",
            "DESC" : "Shop",
            "CODE" : "S 0.4",
            "CD" : "1412373600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "278a54da-7b5d-4407-ff7d-f2ff8ed92f2c",
            "NAME" : "K&L 3",
            "DESC" : "Shop",
            "CODE" : "S 1.3",
            "CD" : "1413324000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "29fc6ede-a20b-4bf1-ef6a-a1cb5c4a31a7",
            "NAME" : "Storage Room SR 2.5",
            "DESC" : "Storage Room",
            "CODE" : "SR 2.5",
            "CD" : "1419375600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "2f83ad33-e1b5-486e-975d-fb0aa87d0fc8",
            "NAME" : "Stationary Simpson 2",
            "DESC" : "Shop",
            "CODE" : "S 2.10",
            "CD" : "1415401200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "31351e0b-ccb5-4f94-83c4-3ba51663623d",
            "NAME" : "American Diner Style 3",
            "DESC" : "Cafe",
            "CODE" : "C 2.5",
            "CD" : "1417734000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "32f47e68-44f7-4494-dc44-1f3a4d2a8130",
            "NAME" : "Sunshine Glasses",
            "DESC" : "Shop",
            "CODE" : "S 2.2",
            "CD" : "1414710000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "3566bb93-3511-4fd6-8d0a-578ae837b2be",
            "NAME" : "Discounter 1",
            "DESC" : "Shop",
            "CODE" : "S 0.8",
            "CD" : "1412719200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "3a543868-f188-4484-c632-0af29cd9c940",
            "NAME" : "Storage Room SR 0.2",
            "DESC" : "Storage Room",
            "CODE" : "SR 0.2",
            "CD" : "1417906800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "3c4ec26b-6612-460e-ed54-ab8374bbdb46",
            "NAME" : "Technical Equipment T 1.5",
            "DESC" : "Technical Equipment",
            "CODE" : "T 1.5",
            "CD" : "1416351600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "3d73da56-19ad-4ac2-b8b9-1deda7603fd4",
            "NAME" : "Storage Room SR 0.6",
            "DESC" : "Storage Room",
            "CODE" : "SR 0.6",
            "CD" : "1418252400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "3f769185-f839-4885-a61e-c83456dcbc3f",
            "NAME" : "Storage Room SR 1.4",
            "DESC" : "Storage Room",
            "CODE" : "SR 1.4",
            "CD" : "1418598000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "4044cd71-cd1d-4d36-e9b8-bda53827c15e",
            "NAME" : "Coiffeur Charles",
            "DESC" : "Shop",
            "CODE" : "S 2.3",
            "CD" : "1414796400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "4238c813-249f-4089-c065-ebf47387889f",
            "NAME" : "Storage Room SR 2.7",
            "DESC" : "Storage Room",
            "CODE" : "SR 2.7",
            "CD" : "1419548400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "4338a817-38d2-4b0f-dd39-1eb3a062dc88",
            "NAME" : "Belucci Gelato 2",
            "DESC" : "Cafe",
            "CODE" : "C 2.2",
            "CD" : "1417474800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "4512a0f0-c961-493b-8b55-64bad89dd596",
            "NAME" : "Technical Equipment T 2.1",
            "DESC" : "Technical Equipment",
            "CODE" : "T 2.1",
            "CD" : "1416524400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "47837f18-094d-44ae-ce7a-054f76c73da0",
            "NAME" : "Correction Glasses",
            "DESC" : "Shop",
            "CODE" : "S 2.1",
            "CD" : "1414623600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "53ef183e-6a38-43e9-91b9-71f659e618a5",
            "NAME" : "Tabacco",
            "DESC" : "Shop",
            "CODE" : "S 0.12",
            "CD" : "1413064800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "57d1e89b-16a0-4618-aa4b-312fb42d8436",
            "NAME" : "Technical Equipment T 0.1",
            "DESC" : "Technical Equipment",
            "CODE" : "T 0.1",
            "CD" : "1415574000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "58f4f086-a37d-42b7-f662-18bad5a3d742",
            "NAME" : "Technical Equipment T 1.3",
            "DESC" : "Technical Equipment",
            "CODE" : "T 1.3",
            "CD" : "1416178800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "5af927ed-09a1-46ac-a02c-1d034f135b79",
            "NAME" : "Boutique Bernadette",
            "DESC" : "Shop",
            "CODE" : "S 2.5",
            "CD" : "1414969200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "5baf76ab-8047-40a6-de83-5bfa1c5c1aba",
            "NAME" : "Storage Room SR 1.3",
            "DESC" : "Storage Room",
            "CODE" : "SR 1.3",
            "CD" : "1418511600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "5df60f38-79d0-40f6-c8d4-e9ecb34e0267",
            "NAME" : "Fiona's Fish Restaurant",
            "DESC" : "Cafe",
            "CODE" : "C 0.2",
            "CD" : "1416870000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "5f0323e6-83a6-4c15-8032-e04d2318ca93",
            "NAME" : "König's 2",
            "DESC" : "Shop",
            "CODE" : "S 0.6",
            "CD" : "1412546400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "630a2fa1-75cd-48ea-88e9-b20e7b099db7",
            "NAME" : "Melon Republic",
            "DESC" : "Shop",
            "CODE" : "S 0.11",
            "CD" : "1412978400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "6ec2f5b6-c2a1-49b8-c127-6b00ebbf881c",
            "NAME" : "Hugo Chef",
            "DESC" : "Shop",
            "CODE" : "S 1.8",
            "CD" : "1413756000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "70548e3f-0a42-44fc-929c-aaa4b3ca14f0",
            "NAME" : "Technical Equipment T 0.2",
            "DESC" : "Technical Equipment",
            "CODE" : "T 0.2",
            "CD" : "1415660400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "7242810e-6451-44c5-a5a8-e7654adc00ff",
            "NAME" : "Technical Equipment T 2.3",
            "DESC" : "Technical Equipment",
            "CODE" : "T 2.3",
            "CD" : "1416697200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "726fe282-20aa-4433-f412-d68955959e4e",
            "NAME" : "Rider's Shoes",
            "DESC" : "Cafe",
            "CODE" : "C 0.5",
            "CD" : "1417129200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "7511693f-bcf6-4da8-835f-22c943ab4688",
            "NAME" : "Storage Room SR 0.1",
            "DESC" : "Storage Room",
            "CODE" : "SR 0.1",
            "CD" : "1417820400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "7625a521-613e-4b95-a451-5616548cec1b",
            "NAME" : "Storage Room SR 1.6",
            "DESC" : "Storage Room",
            "CODE" : "SR 1.6",
            "CD" : "1418770800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "7e254c0d-71c1-4393-d312-5b0ca68a60ec",
            "NAME" : "Technical Equipment T 1.6",
            "DESC" : "Technical Equipment",
            "CODE" : "T 1.6",
            "CD" : "1416438000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "8489faac-c1c9-4e61-bf21-539ad1d4d812",
            "NAME" : "Technical Equipment T 0.3",
            "DESC" : "Technical Equipment",
            "CODE" : "T 0.3",
            "CD" : "1415746800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "8b0323b8-017e-42ca-837e-b0bd69b1500f",
            "NAME" : "Jeansy",
            "DESC" : "Shop",
            "CODE" : "S 1.14",
            "CD" : "1414274400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "8c3ba542-3f70-4b9e-8431-0bacb9171314",
            "NAME" : "Storage Room SR 2.1",
            "DESC" : "Storage Room",
            "CODE" : "SR 2.1",
            "CD" : "1419030000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "8ee22093-0398-4dea-e9ce-7817234655be",
            "NAME" : "Technical Equipment T 2.2",
            "DESC" : "Technical Equipment",
            "CODE" : "T 2.2",
            "CD" : "1416610800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "974034e7-2da5-42be-f412-f9b9471c956f",
            "NAME" : "German Apparel 1",
            "DESC" : "Shop",
            "CODE" : "S 1.4",
            "CD" : "1413410400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "97d47c74-27ce-414e-dac4-6d6631ce838d",
            "NAME" : "American Diner Style 2",
            "DESC" : "Cafe",
            "CODE" : "C 2.4",
            "CD" : "1417647600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "99c52a08-d99d-404a-f1df-428011b5ba7d",
            "NAME" : "K&L 1",
            "DESC" : "Shop",
            "CODE" : "S 1.1",
            "CD" : "1413151200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "9ee37532-1b31-4ffc-c6e9-ad89ce4e7bf4",
            "NAME" : "Bank of Berlin",
            "DESC" : "Shop",
            "CODE" : "S 2.4",
            "CD" : "1414882800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "9ef1f6b5-7979-49a9-a14a-458431b11af3",
            "NAME" : "Belucci Gelato 1",
            "DESC" : "Cafe",
            "CODE" : "C 2.1",
            "CD" : "1417388400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "a8800a3b-0bf4-4f93-cfbe-f26343441893",
            "NAME" : "K&L 2",
            "DESC" : "Shop",
            "CODE" : "S 1.2",
            "CD" : "1413237600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "a964a9e5-6e2c-40a6-bb03-2fdc4c8c0b25",
            "NAME" : "Storage Room SR 1.1",
            "DESC" : "Storage Room",
            "CODE" : "SR 1.1",
            "CD" : "1418338800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "b76735bf-ff4d-489f-bb7e-ef50704e78b1",
            "NAME" : "Moonbucks 1",
            "DESC" : "Cafe",
            "CODE" : "C 0.3",
            "CD" : "1416956400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "bd5dcf14-da64-4a7c-aff1-a39aa1fcbbe7",
            "NAME" : "Camping 123-2",
            "DESC" : "Shop",
            "CODE" : "S 0.2",
            "CD" : "1412200800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "bd630401-358b-4d6b-86ce-abc980c8f865",
            "NAME" : "German Apparel 2",
            "DESC" : "Shop",
            "CODE" : "S 1.5",
            "CD" : "1413496800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "bd648560-2d8b-46e8-eee6-2c1e4adf948e",
            "NAME" : "Moonbucks 2",
            "DESC" : "Cafe",
            "CODE" : "C 0.4",
            "CD" : "1417042800000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "c18d6e27-e6e9-456d-db47-1a23a60fa134",
            "NAME" : "American Diner Style 1",
            "DESC" : "Cafe",
            "CODE" : "C 2.3",
            "CD" : "1417561200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "c4984b6a-0981-41b5-b7f5-6cb1e68fe45b",
            "NAME" : "Technical Equipment T 1.2",
            "DESC" : "Technical Equipment",
            "CODE" : "T 1.2",
            "CD" : "1416092400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "c6765da5-58c5-418c-bfa7-abddc4e5c964",
            "NAME" : "Jupiter 1",
            "DESC" : "Shop",
            "CODE" : "S 2.6",
            "CD" : "1415055600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "d095c89e-42e3-4bd7-9ac0-88c237b0f593",
            "NAME" : "Bavarian Bakery",
            "DESC" : "Cafe",
            "CODE" : "C 0.6",
            "CD" : "1417215600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "d131135c-9838-4922-e846-20d8356cf964",
            "NAME" : "Discounter 2",
            "DESC" : "Shop",
            "CODE" : "S 0.9",
            "CD" : "1412805600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "d1442862-8c79-4842-8d4a-b4fbcbe15b47",
            "NAME" : "Storage Room SR 2.6",
            "DESC" : "Storage Room",
            "CODE" : "SR 2.6",
            "CD" : "1419462000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "d290a7aa-08c4-4b92-f33d-d459690becb9",
            "NAME" : "Post Offices",
            "DESC" : "Shop",
            "CODE" : "S 2.11",
            "CD" : "1415487600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "d9a02d26-545d-4b69-8284-0fa10d190e1a",
            "NAME" : "Monthdays Jeans & Style",
            "DESC" : "Shop",
            "CODE" : "S 1.17",
            "CD" : "1414537200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "dac8465a-19b1-418a-8595-d8c5fa7e25d7",
            "NAME" : "Meat & More - Finest Meat in Town",
            "DESC" : "Cafe",
            "CODE" : "C 0.7",
            "CD" : "1417302000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "e0210beb-3dec-49e2-fa73-72d24de25fcc",
            "NAME" : "Storage Room SR 1.5",
            "DESC" : "Storage Room",
            "CODE" : "SR 1.5",
            "CD" : "1418684400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "e2df6dc6-c1c0-4256-9929-49e4e45bbe55",
            "NAME" : "O'Paper",
            "DESC" : "Shop",
            "CODE" : "S 0.3",
            "CD" : "1412287200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "e5fe9915-8d77-48c4-d77a-f104ea0c065c",
            "NAME" : "Technical Equipment T 1.4",
            "DESC" : "Technical Equipment",
            "CODE" : "T 1.4",
            "CD" : "1416265200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "ead9e538-476d-4ffb-8e58-131096c9388f",
            "NAME" : "Storage Room SR 0.5",
            "DESC" : "Storage Room",
            "CODE" : "SR 0.5",
            "CD" : "1418166000000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "ecc67fba-74a7-490a-a44a-9753681e3733",
            "NAME" : "Unequal 1",
            "DESC" : "Shop",
            "CODE" : "S 1.9",
            "CD" : "1413842400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "ecf05239-fbeb-49cd-e66b-abaf52946f25",
            "NAME" : "Storage Room SR 0.3",
            "DESC" : "Storage Room",
            "CODE" : "SR 0.3",
            "CD" : "1417993200000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "efc83fa5-cf74-49e3-c7e1-5f07540d641f",
            "NAME" : "Jupiter 3",
            "DESC" : "Shop",
            "CODE" : "S 2.8",
            "CD" : "1415228400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "f060a1c5-61f9-4ebe-9edd-0eb8b5dafb36",
            "NAME" : "Technical Equipment T 0.5",
            "DESC" : "Technical Equipment",
            "CODE" : "T 0.5",
            "CD" : "1415919600000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "f2b8790e-aa6f-410c-ac19-922dc0536b7c",
            "NAME" : "Camping 123-1",
            "DESC" : "Shop",
            "CODE" : "S 0.1",
            "CD" : "1412114400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "f72f2c4a-56f7-4529-ff5d-1f5c19cd80bb",
            "NAME" : "Life & Style",
            "DESC" : "Shop",
            "CODE" : "S 1.15",
            "CD" : "1414364400000",
            "CATEGORY" : "ROOM"
          }, {
            "ID" : "f7e20c7b-c45a-4c16-ff57-1c8bc9f17ec8",
            "NAME" : "Unequal 2",
            "DESC" : "Shop Type 3",
            "CODE" : "S 1.10",
            "CD" : "1413928800000",
            "CATEGORY" : "ROOM"
        }]};

        // Promise-based API
        return {
            loadAllProjects : function() {
                // Simulate async nature of real remote calls
                return $q.when(projects);
            }
        };
    }
})();
