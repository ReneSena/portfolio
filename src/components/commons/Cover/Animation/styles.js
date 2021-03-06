import styled, { css } from 'styled-components';

const Animation = css`
	.galaxy-header {
		overflow: hidden;
		position: absolute;
		width: 100%;
		height: 100vh;
		-webkit-perspective: 340px;
		perspective: 340px;
		opacity: 0.7;
	}

	.galaxy {
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		width: 100%;
		height: 100%;
		-webkit-perspective: 340px;
		perspective: 340px;
		opacity: 0.7;
	}

	.stars {
		position: absolute;
		top: 50%;
		border-radius: 50%;
		left: 50%;
		width: 3px;
		height: 3px;
		-webkit-box-shadow: -740px 444px #f2f2f2, 157px -59px #cccccc,
			36px -3px #cccccc, -857px -439px #cccccc, -1408px 402px #d9d9d9,
			-235px -149px #d9d9d9, -1074px -305px #cfcfcf, 820px -287px #c4c4c4,
			-536px 243px #d6d6d6, 954px 377px #fafafa, 136px -179px #ededed,
			-294px -159px #ededed, 374px 403px #dbdbdb, -803px 4px #dbdbdb,
			-671px -262px #f7f7f7, -589px 136px #c7c7c7, -1248px -352px #e6e6e6,
			459px -209px #f7f7f7, -1012px 318px #cfcfcf, -290px 117px #fafafa,
			-926px 46px #dbdbdb, 1350px 278px #d6d6d6, 969px -321px #e6e6e6,
			380px -371px #e6e6e6, 912px 130px #ededed, -433px -403px #d9d9d9,
			-469px -46px #c2c2c2, -854px 37px #c9c9c9, 722px 112px #ededed,
			1094px -49px #e6e6e6, 1436px -75px #c9c9c9, 897px 476px #cccccc,
			-262px 413px #cccccc, 806px 210px #c4c4c4, 1215px -71px #cccccc,
			-425px 156px #d4d4d4, -1338px 444px #e3e3e3, 1214px 174px #c4c4c4,
			-1133px 226px #d1d1d1, 1221px 352px #e8e8e8, 1385px 69px #e0e0e0,
			-85px 281px #c7c7c7, -451px 46px #fcfcfc, -1064px -134px #dedede,
			1331px -15px #d6d6d6, -1001px 275px #d4d4d4, 522px -6px #cfcfcf,
			573px -153px #ebebeb, 1320px -339px #e0e0e0, -591px 180px #fafafa,
			779px -178px #c2c2c2, -606px 183px #c7c7c7, -1423px -406px #d4d4d4,
			324px -17px #c4c4c4, -1403px -362px #dedede, 1294px 204px #dbdbdb,
			648px 77px #c7c7c7, -39px -104px #ebebeb, 157px -88px #f7f7f7,
			-983px -330px #fcfcfc, -999px 78px #e8e8e8, -1268px -400px #f2f2f2,
			-438px -77px #d6d6d6, 573px 279px whitesmoke, -117px 252px #f0f0f0,
			-359px 292px #d6d6d6, 1306px 428px #e6e6e6, 1364px -141px #f2f2f2,
			-433px -394px #dbdbdb, 1424px -402px #e6e6e6, -403px 418px #ededed,
			-196px 147px #cccccc, 454px 323px #c9c9c9, -1416px 50px #dbdbdb,
			1189px 210px whitesmoke, -615px -323px #e6e6e6, -203px 277px #f2f2f2,
			1245px 45px #e6e6e6, 531px -225px #dedede, 737px 151px #dedede,
			-696px 323px #d6d6d6, 1358px 151px #d6d6d6, 29px 396px whitesmoke,
			-60px -355px whitesmoke, -445px -355px #f2f2f2, 12px -98px #fafafa,
			-757px -165px #cfcfcf, 927px 445px #f7f7f7, 278px 98px #ebebeb,
			-1324px -316px #d4d4d4, -582px -13px #d9d9d9, -1386px 283px #c9c9c9,
			83px 109px whitesmoke, 511px -149px #e0e0e0, -581px -109px #d1d1d1,
			298px -124px #c2c2c2, 858px -263px #e0e0e0, -1412px 210px #dedede,
			327px 472px #dedede, 30px -220px #dbdbdb, 206px 266px #cfcfcf,
			-835px -428px #c9c9c9, 695px -440px #d1d1d1, -1293px 120px #d1d1d1,
			-537px 432px #e0e0e0, 374px 171px #e3e3e3, 1221px -358px #d4d4d4,
			1028px 460px #ebebeb, 413px 201px #fcfcfc, 284px -428px #cfcfcf,
			672px -338px white, 479px -358px #e3e3e3, -1178px -434px #fcfcfc,
			-1029px 423px #c2c2c2, 255px 116px #fcfcfc, -1065px 323px #f7f7f7,
			510px -84px #dbdbdb, -1469px 53px #ededed, -1290px -375px #fafafa,
			-269px -173px #f0f0f0, -874px 200px #d6d6d6, -1053px 182px #e3e3e3,
			-137px 280px #dbdbdb, 1408px -429px #dedede, 687px -48px #c7c7c7,
			-1204px -25px #ededed, -676px -264px #d1d1d1, -1483px -267px #c7c7c7,
			501px -252px #e6e6e6, -991px 335px #c4c4c4, -1089px -63px #d1d1d1,
			416px -144px #ededed, -895px 320px #cccccc, -1092px -462px #d6d6d6,
			935px -477px #d1d1d1, -1192px -438px #c7c7c7,
			421px -101px whitesmoke, -1284px -20px #fafafa, 231px -454px #ebebeb,
			-83px 7px #ededed, 844px -153px #f2f2f2, 95px -372px whitesmoke,
			1350px 96px white, 689px 255px #e8e8e8, 448px -59px white,
			-701px -85px #c7c7c7, -1383px 44px #c7c7c7, 364px -421px #f0f0f0,
			442px -284px #e8e8e8, -942px -56px #e8e8e8, -198px 169px #f2f2f2,
			-912px -120px #e3e3e3, -1479px -67px #d9d9d9, -485px 128px #d4d4d4,
			-858px 78px #d4d4d4, -7px 175px #f7f7f7, -634px -178px #e0e0e0,
			52px -256px #c4c4c4, 855px -72px #f0f0f0, 166px 303px #f7f7f7,
			143px -469px #d6d6d6, 178px -283px #ededed, -985px -422px #c7c7c7,
			794px -375px #e0e0e0, 751px 276px white, 1443px -199px #cccccc,
			454px -417px #f0f0f0, -685px -427px #d1d1d1, 562px -35px #e6e6e6,
			24px 124px #cfcfcf, -1394px 445px #c9c9c9, 996px -108px #c2c2c2,
			-400px 288px #c2c2c2, -1247px -383px #fcfcfc, -275px -143px #e3e3e3,
			-226px -222px #ebebeb, 665px 212px #c4c4c4, 502px 245px #c7c7c7,
			-1187px -443px white, -1246px 97px #d4d4d4, -593px -318px #d4d4d4,
			1px 81px #ebebeb, 930px 264px #f7f7f7, 664px 141px #f2f2f2,
			-1301px 135px #cccccc, -573px 340px #d4d4d4, -946px 444px #e6e6e6,
			-103px -194px #fcfcfc, 796px 171px #d6d6d6, 431px -421px #f7f7f7,
			1106px -11px #c2c2c2, -382px -69px #d4d4d4, -55px -461px #e8e8e8,
			1248px -360px #d1d1d1, -145px -93px #f7f7f7, 35px 365px #c7c7c7,
			-219px 209px #e0e0e0, 1407px -429px #d9d9d9, 439px -251px #f7f7f7,
			967px 326px #cfcfcf, -883px 257px #c2c2c2, -180px 205px #dbdbdb,
			-65px 102px #dbdbdb, 150px 229px #c4c4c4, 33px -348px #fafafa,
			-1339px -413px white, -1352px 262px #c9c9c9, -557px -86px whitesmoke,
			-232px 279px #f7f7f7, -465px 468px #f2f2f2, -105px 219px #f0f0f0,
			-1147px -51px #f2f2f2, -1489px -158px #d1d1d1, -878px -384px #dbdbdb,
			1104px 234px #d9d9d9, 518px -17px #e0e0e0, -1082px -210px #d6d6d6,
			-177px 249px #c7c7c7, 456px -108px #dbdbdb, -798px -112px #d9d9d9,
			337px 159px #c4c4c4, -1005px 402px #dedede, -1401px 194px #fafafa,
			871px 305px whitesmoke, 756px -26px #f0f0f0, 1086px 379px #c4c4c4,
			868px 336px #d1d1d1, -533px 59px #e3e3e3, -148px 186px #d6d6d6,
			-345px 257px #f7f7f7, 441px -116px #c4c4c4, -1162px 340px #d9d9d9,
			-1069px 431px #f7f7f7, -528px 354px #d9d9d9, 836px 35px whitesmoke,
			-974px 10px #fcfcfc, -304px -259px #dedede, 254px 47px whitesmoke,
			328px 31px #c7c7c7, -1450px 316px #f0f0f0, 386px 459px #cccccc,
			-1326px 79px #d1d1d1, 673px 114px #cccccc, -9px -99px #c2c2c2,
			466px 99px #fcfcfc, 712px 178px #d4d4d4, -981px -386px #d9d9d9,
			904px -361px #d6d6d6, 983px 213px #d1d1d1, -287px 220px #ebebeb,
			589px -71px #c2c2c2, 1264px 372px #fcfcfc, 659px -441px #ededed,
			1377px 112px #f2f2f2, 1344px 477px #cccccc, -1476px -316px #d6d6d6,
			354px 69px #ebebeb, -465px -266px #fafafa, -485px 456px #c4c4c4,
			-54px 146px #cccccc, -210px -330px #d6d6d6, 505px 456px #d4d4d4,
			1394px 253px #d4d4d4, -1062px 336px #c2c2c2, 966px 196px #fcfcfc,
			-1463px -114px #ededed, -1119px 112px #d4d4d4, -952px -23px #cfcfcf,
			1025px 279px #e8e8e8, 1464px 162px #fafafa, 327px -122px whitesmoke,
			-925px -177px whitesmoke, 385px -63px #e0e0e0, 1358px 451px #f2f2f2,
			1344px -123px #e6e6e6, -1477px 398px #c2c2c2, 425px -306px #f0f0f0,
			90px 445px #fafafa, -1172px -198px white, 345px -24px #c9c9c9,
			-1285px -283px #ededed, -818px 53px #dedede, 1057px -213px #cccccc,
			678px 124px #f0f0f0, 688px 396px #ebebeb, -719px -172px #c4c4c4,
			-1215px -174px #f0f0f0, -260px 293px white, -1488px -386px #f7f7f7,
			-1480px 459px white, 1380px 32px #f2f2f2, 253px 328px #d6d6d6,
			286px 449px #cfcfcf, -594px 66px white, 97px -69px #cfcfcf,
			-991px 313px #c2c2c2, -880px -83px white, -86px -192px #c2c2c2,
			377px -241px #c4c4c4, -1047px 95px #fcfcfc, -366px 40px #e8e8e8,
			-414px 439px #f7f7f7, 1056px -404px #c2c2c2, 444px -244px #e8e8e8,
			-1407px 270px #c7c7c7, -355px -16px #d1d1d1, 1229px -114px white,
			694px -416px #d6d6d6, -1309px -174px #ededed, 945px -457px #dbdbdb,
			-1189px -463px #e6e6e6, -1449px -136px #dedede, 866px 26px #d9d9d9,
			-80px 219px #f7f7f7, -781px -31px #e6e6e6, 756px 299px #d9d9d9,
			1025px 320px #e6e6e6, 291px -281px #ededed, -853px 247px #e0e0e0,
			198px 282px #d1d1d1, -505px 445px #ebebeb, 314px 250px #e8e8e8,
			-566px -338px #f7f7f7, -195px -296px #dedede, 737px -81px #ebebeb,
			1430px 277px #f0f0f0, -1117px -59px #d1d1d1, 1422px 233px #e6e6e6,
			1236px 301px #ebebeb, 177px 264px #f7f7f7, -957px 142px #cccccc,
			1324px 341px #c4c4c4, -999px 463px #e0e0e0, 680px -319px #c2c2c2,
			1194px -287px #f7f7f7, -1227px 348px #fafafa, 1351px -388px #f7f7f7,
			242px 135px #c2c2c2, -778px 292px #ededed, 40px 22px #c4c4c4,
			1395px 192px #fafafa, -300px -309px #c4c4c4, 1167px 152px #dedede,
			1438px -277px #d4d4d4, 1103px -44px white, -1179px -301px #c9c9c9,
			181px 364px #f0f0f0, 477px 332px #dedede, -1016px 161px #ededed,
			1283px 468px #f2f2f2, -880px 17px #d6d6d6;
		box-shadow: -740px 444px #f2f2f2, 157px -59px #cccccc, 36px -3px #cccccc,
			-857px -439px #cccccc, -1408px 402px #d9d9d9, -235px -149px #d9d9d9,
			-1074px -305px #cfcfcf, 820px -287px #c4c4c4, -536px 243px #d6d6d6,
			954px 377px #fafafa, 136px -179px #ededed, -294px -159px #ededed,
			374px 403px #dbdbdb, -803px 4px #dbdbdb, -671px -262px #f7f7f7,
			-589px 136px #c7c7c7, -1248px -352px #e6e6e6, 459px -209px #f7f7f7,
			-1012px 318px #cfcfcf, -290px 117px #fafafa, -926px 46px #dbdbdb,
			1350px 278px #d6d6d6, 969px -321px #e6e6e6, 380px -371px #e6e6e6,
			912px 130px #ededed, -433px -403px #d9d9d9, -469px -46px #c2c2c2,
			-854px 37px #c9c9c9, 722px 112px #ededed, 1094px -49px #e6e6e6,
			1436px -75px #c9c9c9, 897px 476px #cccccc, -262px 413px #cccccc,
			806px 210px #c4c4c4, 1215px -71px #cccccc, -425px 156px #d4d4d4,
			-1338px 444px #e3e3e3, 1214px 174px #c4c4c4, -1133px 226px #d1d1d1,
			1221px 352px #e8e8e8, 1385px 69px #e0e0e0, -85px 281px #c7c7c7,
			-451px 46px #fcfcfc, -1064px -134px #dedede, 1331px -15px #d6d6d6,
			-1001px 275px #d4d4d4, 522px -6px #cfcfcf, 573px -153px #ebebeb,
			1320px -339px #e0e0e0, -591px 180px #fafafa, 779px -178px #c2c2c2,
			-606px 183px #c7c7c7, -1423px -406px #d4d4d4, 324px -17px #c4c4c4,
			-1403px -362px #dedede, 1294px 204px #dbdbdb, 648px 77px #c7c7c7,
			-39px -104px #ebebeb, 157px -88px #f7f7f7, -983px -330px #fcfcfc,
			-999px 78px #e8e8e8, -1268px -400px #f2f2f2, -438px -77px #d6d6d6,
			573px 279px whitesmoke, -117px 252px #f0f0f0, -359px 292px #d6d6d6,
			1306px 428px #e6e6e6, 1364px -141px #f2f2f2, -433px -394px #dbdbdb,
			1424px -402px #e6e6e6, -403px 418px #ededed, -196px 147px #cccccc,
			454px 323px #c9c9c9, -1416px 50px #dbdbdb, 1189px 210px whitesmoke,
			-615px -323px #e6e6e6, -203px 277px #f2f2f2, 1245px 45px #e6e6e6,
			531px -225px #dedede, 737px 151px #dedede, -696px 323px #d6d6d6,
			1358px 151px #d6d6d6, 29px 396px whitesmoke, -60px -355px whitesmoke,
			-445px -355px #f2f2f2, 12px -98px #fafafa, -757px -165px #cfcfcf,
			927px 445px #f7f7f7, 278px 98px #ebebeb, -1324px -316px #d4d4d4,
			-582px -13px #d9d9d9, -1386px 283px #c9c9c9, 83px 109px whitesmoke,
			511px -149px #e0e0e0, -581px -109px #d1d1d1, 298px -124px #c2c2c2,
			858px -263px #e0e0e0, -1412px 210px #dedede, 327px 472px #dedede,
			30px -220px #dbdbdb, 206px 266px #cfcfcf, -835px -428px #c9c9c9,
			695px -440px #d1d1d1, -1293px 120px #d1d1d1, -537px 432px #e0e0e0,
			374px 171px #e3e3e3, 1221px -358px #d4d4d4, 1028px 460px #ebebeb,
			413px 201px #fcfcfc, 284px -428px #cfcfcf, 672px -338px white,
			479px -358px #e3e3e3, -1178px -434px #fcfcfc, -1029px 423px #c2c2c2,
			255px 116px #fcfcfc, -1065px 323px #f7f7f7, 510px -84px #dbdbdb,
			-1469px 53px #ededed, -1290px -375px #fafafa, -269px -173px #f0f0f0,
			-874px 200px #d6d6d6, -1053px 182px #e3e3e3, -137px 280px #dbdbdb,
			1408px -429px #dedede, 687px -48px #c7c7c7, -1204px -25px #ededed,
			-676px -264px #d1d1d1, -1483px -267px #c7c7c7, 501px -252px #e6e6e6,
			-991px 335px #c4c4c4, -1089px -63px #d1d1d1, 416px -144px #ededed,
			-895px 320px #cccccc, -1092px -462px #d6d6d6, 935px -477px #d1d1d1,
			-1192px -438px #c7c7c7, 421px -101px whitesmoke,
			-1284px -20px #fafafa, 231px -454px #ebebeb, -83px 7px #ededed,
			844px -153px #f2f2f2, 95px -372px whitesmoke, 1350px 96px white,
			689px 255px #e8e8e8, 448px -59px white, -701px -85px #c7c7c7,
			-1383px 44px #c7c7c7, 364px -421px #f0f0f0, 442px -284px #e8e8e8,
			-942px -56px #e8e8e8, -198px 169px #f2f2f2, -912px -120px #e3e3e3,
			-1479px -67px #d9d9d9, -485px 128px #d4d4d4, -858px 78px #d4d4d4,
			-7px 175px #f7f7f7, -634px -178px #e0e0e0, 52px -256px #c4c4c4,
			855px -72px #f0f0f0, 166px 303px #f7f7f7, 143px -469px #d6d6d6,
			178px -283px #ededed, -985px -422px #c7c7c7, 794px -375px #e0e0e0,
			751px 276px white, 1443px -199px #cccccc, 454px -417px #f0f0f0,
			-685px -427px #d1d1d1, 562px -35px #e6e6e6, 24px 124px #cfcfcf,
			-1394px 445px #c9c9c9, 996px -108px #c2c2c2, -400px 288px #c2c2c2,
			-1247px -383px #fcfcfc, -275px -143px #e3e3e3, -226px -222px #ebebeb,
			665px 212px #c4c4c4, 502px 245px #c7c7c7, -1187px -443px white,
			-1246px 97px #d4d4d4, -593px -318px #d4d4d4, 1px 81px #ebebeb,
			930px 264px #f7f7f7, 664px 141px #f2f2f2, -1301px 135px #cccccc,
			-573px 340px #d4d4d4, -946px 444px #e6e6e6, -103px -194px #fcfcfc,
			796px 171px #d6d6d6, 431px -421px #f7f7f7, 1106px -11px #c2c2c2,
			-382px -69px #d4d4d4, -55px -461px #e8e8e8, 1248px -360px #d1d1d1,
			-145px -93px #f7f7f7, 35px 365px #c7c7c7, -219px 209px #e0e0e0,
			1407px -429px #d9d9d9, 439px -251px #f7f7f7, 967px 326px #cfcfcf,
			-883px 257px #c2c2c2, -180px 205px #dbdbdb, -65px 102px #dbdbdb,
			150px 229px #c4c4c4, 33px -348px #fafafa, -1339px -413px white,
			-1352px 262px #c9c9c9, -557px -86px whitesmoke, -232px 279px #f7f7f7,
			-465px 468px #f2f2f2, -105px 219px #f0f0f0, -1147px -51px #f2f2f2,
			-1489px -158px #d1d1d1, -878px -384px #dbdbdb, 1104px 234px #d9d9d9,
			518px -17px #e0e0e0, -1082px -210px #d6d6d6, -177px 249px #c7c7c7,
			456px -108px #dbdbdb, -798px -112px #d9d9d9, 337px 159px #c4c4c4,
			-1005px 402px #dedede, -1401px 194px #fafafa, 871px 305px whitesmoke,
			756px -26px #f0f0f0, 1086px 379px #c4c4c4, 868px 336px #d1d1d1,
			-533px 59px #e3e3e3, -148px 186px #d6d6d6, -345px 257px #f7f7f7,
			441px -116px #c4c4c4, -1162px 340px #d9d9d9, -1069px 431px #f7f7f7,
			-528px 354px #d9d9d9, 836px 35px whitesmoke, -974px 10px #fcfcfc,
			-304px -259px #dedede, 254px 47px whitesmoke, 328px 31px #c7c7c7,
			-1450px 316px #f0f0f0, 386px 459px #cccccc, -1326px 79px #d1d1d1,
			673px 114px #cccccc, -9px -99px #c2c2c2, 466px 99px #fcfcfc,
			712px 178px #d4d4d4, -981px -386px #d9d9d9, 904px -361px #d6d6d6,
			983px 213px #d1d1d1, -287px 220px #ebebeb, 589px -71px #c2c2c2,
			1264px 372px #fcfcfc, 659px -441px #ededed, 1377px 112px #f2f2f2,
			1344px 477px #cccccc, -1476px -316px #d6d6d6, 354px 69px #ebebeb,
			-465px -266px #fafafa, -485px 456px #c4c4c4, -54px 146px #cccccc,
			-210px -330px #d6d6d6, 505px 456px #d4d4d4, 1394px 253px #d4d4d4,
			-1062px 336px #c2c2c2, 966px 196px #fcfcfc, -1463px -114px #ededed,
			-1119px 112px #d4d4d4, -952px -23px #cfcfcf, 1025px 279px #e8e8e8,
			1464px 162px #fafafa, 327px -122px whitesmoke,
			-925px -177px whitesmoke, 385px -63px #e0e0e0, 1358px 451px #f2f2f2,
			1344px -123px #e6e6e6, -1477px 398px #c2c2c2, 425px -306px #f0f0f0,
			90px 445px #fafafa, -1172px -198px white, 345px -24px #c9c9c9,
			-1285px -283px #ededed, -818px 53px #dedede, 1057px -213px #cccccc,
			678px 124px #f0f0f0, 688px 396px #ebebeb, -719px -172px #c4c4c4,
			-1215px -174px #f0f0f0, -260px 293px white, -1488px -386px #f7f7f7,
			-1480px 459px white, 1380px 32px #f2f2f2, 253px 328px #d6d6d6,
			286px 449px #cfcfcf, -594px 66px white, 97px -69px #cfcfcf,
			-991px 313px #c2c2c2, -880px -83px white, -86px -192px #c2c2c2,
			377px -241px #c4c4c4, -1047px 95px #fcfcfc, -366px 40px #e8e8e8,
			-414px 439px #f7f7f7, 1056px -404px #c2c2c2, 444px -244px #e8e8e8,
			-1407px 270px #c7c7c7, -355px -16px #d1d1d1, 1229px -114px white,
			694px -416px #d6d6d6, -1309px -174px #ededed, 945px -457px #dbdbdb,
			-1189px -463px #e6e6e6, -1449px -136px #dedede, 866px 26px #d9d9d9,
			-80px 219px #f7f7f7, -781px -31px #e6e6e6, 756px 299px #d9d9d9,
			1025px 320px #e6e6e6, 291px -281px #ededed, -853px 247px #e0e0e0,
			198px 282px #d1d1d1, -505px 445px #ebebeb, 314px 250px #e8e8e8,
			-566px -338px #f7f7f7, -195px -296px #dedede, 737px -81px #ebebeb,
			1430px 277px #f0f0f0, -1117px -59px #d1d1d1, 1422px 233px #e6e6e6,
			1236px 301px #ebebeb, 177px 264px #f7f7f7, -957px 142px #cccccc,
			1324px 341px #c4c4c4, -999px 463px #e0e0e0, 680px -319px #c2c2c2,
			1194px -287px #f7f7f7, -1227px 348px #fafafa, 1351px -388px #f7f7f7,
			242px 135px #c2c2c2, -778px 292px #ededed, 40px 22px #c4c4c4,
			1395px 192px #fafafa, -300px -309px #c4c4c4, 1167px 152px #dedede,
			1438px -277px #d4d4d4, 1103px -44px white, -1179px -301px #c9c9c9,
			181px 364px #f0f0f0, 477px 332px #dedede, -1016px 161px #ededed,
			1283px 468px #f2f2f2, -880px 17px #d6d6d6;
		-webkit-animation: zooms 10s linear infinite;
		animation: zooms 10s linear infinite;
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.stars:before,
	.stars:after {
		content: '';
		position: absolute;
		width: inherit;
		height: inherit;
		-webkit-box-shadow: inherit;
		box-shadow: inherit;
	}

	.stars:before {
		-webkit-transform: translateZ(-300px);
		transform: translateZ(-300px);
		-webkit-animation: hideme1 10s linear infinite;
		animation: hideme1 10s linear infinite;
	}

	.stars:after {
		-webkit-transform: translateZ(-600px);
		transform: translateZ(-600px);
		-webkit-animation: hideme2 10s linear infinite;
		animation: hideme2 10s linear infinite;
	}

	@-webkit-keyframes zooms {
		from {
			-webkit-transform: translateZ(0px);
			transform: translateZ(0px);
		}
		to {
			-webkit-transform: translateZ(300px);
			transform: translateZ(300px);
		}
	}

	@keyframes zooms {
		from {
			-webkit-transform: translateZ(0px);
			transform: translateZ(0px);
		}
		to {
			-webkit-transform: translateZ(300px);
			transform: translateZ(300px);
		}
	}

	@-webkit-keyframes hideme1 {
		from {
			opacity: 0.5;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes hideme1 {
		from {
			opacity: 0.5;
		}
		to {
			opacity: 1;
		}
	}

	@-webkit-keyframes hideme2 {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.5;
		}
	}

	@keyframes hideme2 {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.5;
		}
	}

	section,
	header {
		position: relative;
		overflow: hidden;
		background: ${({ theme }) => theme.colors.black};
		height: 100%;
	}
`;

export const Galaxy = styled.div`
	${Animation};
	z-index: -1;
`;
