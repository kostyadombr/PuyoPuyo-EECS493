var PuyoPuyo = PuyoPuyo || {};

PuyoPuyo.SettingsState = {
    create: function() {
        console.log("SETTINGS");
        
        this.currDifficulty = this.game.global['gameDifficultyIndex'];
        
        this.keysToIndex = {'1':0,'2':1,'3':2,'4':3,'5':4,'6':5,'7':6,'8':7,'9':8,'0':9,'Q':10,'W':11,'E':12,'R':13,'T':14,
        'Y':15,'U':16,'I':17,'O':18,'P':19,'[':20,']':21,'A':22,'S':23,'D':24,'F':25,'G':26,'H':27,'J':28,'K':29,'L':30,';':31,'Z':32,'X':33,'C':34,
        'V':35,'B':36,'N':37,'M':38,',':39,'.':40,'<-':41,'->':42,'DOWN':43,'UP':44};
        
        this.indexToKeys = {0:'1',1:'2',2:'3',3:'4',4:'5',5:'6',6:'7',7:'8',8:'9',9:'0',10:'Q',11:'W',12:'E',13:'R',14:'T',
        15:'Y',16:'U',17:'I',18:'O',19:'P',20:'[',21:']',22:'A',23:'S',24:'D',25:'F',26:'G',27:'H',28:'J',29:'K',30:'L',31:';',32:'Z',33:'X',34:'C',
        35:'V',36:'B',37:'N',38:'M',39:',',40:'.',41:'<-',42:'->',43:'DOWN',44:'UP'};
        
        this.indexToUsed = {0:false,1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false,10:false,11:false,12:false,13:false,14:false,
        15:false,16:false,17:false,18:false,19:false,20:false,21:false,22:false,23:false,24:false,25:false,26:false,27:false,28:false,29:false,30:false,31:false,32:false,33:false,34:false,
        35:false,36:false,37:false,38:false,39:false,40:false,41:false,42:false,43:false,44:false};
        
        this.indexToKeyboard = {
            0 : Phaser.Keyboard.ONE,
            1 : Phaser.Keyboard.TWO,
            2 : Phaser.Keyboard.THREE,
            3 : Phaser.Keyboard.FOUR,
            4 : Phaser.Keyboard.FIVE,
            5 : Phaser.Keyboard.SIX,
            6 : Phaser.Keyboard.SEVEN,
            7 : Phaser.Keyboard.EIGHT,
            8 : Phaser.Keyboard.NINE,
            9 : Phaser.Keyboard.ZERO,
            10 : Phaser.Keyboard.Q,
            11 : Phaser.Keyboard.W,
            12 : Phaser.Keyboard.E,
            13 : Phaser.Keyboard.R,
            14 : Phaser.Keyboard.T,
            15 : Phaser.Keyboard.Y,
            16 : Phaser.Keyboard.U,
            17 : Phaser.Keyboard.I,
            18 : Phaser.Keyboard.O,
            19 : Phaser.Keyboard.P,
            20 : Phaser.Keyboard.OPEN_BRACKET,
            21 : Phaser.Keyboard.CLOSED_BRACKET,
            22 : Phaser.Keyboard.A,
            23 : Phaser.Keyboard.S,
            24 : Phaser.Keyboard.D,
            25 : Phaser.Keyboard.F,
            26 : Phaser.Keyboard.G,
            27 : Phaser.Keyboard.H,
            28 : Phaser.Keyboard.J,
            29 : Phaser.Keyboard.K,
            30 : Phaser.Keyboard.L,
            31 : Phaser.Keyboard.COLON,
            32 : Phaser.Keyboard.Z,
            33 : Phaser.Keyboard.X,
            34 : Phaser.Keyboard.C,
            35 : Phaser.Keyboard.V,
            36 : Phaser.Keyboard.B,
            37 : Phaser.Keyboard.N,
            38 : Phaser.Keyboard.M,
            39 : Phaser.Keyboard.COMMA,
            40 : Phaser.Keyboard.PERIOD,
            41 : Phaser.Keyboard.LEFT,
            42 : Phaser.Keyboard.RIGHT,
            43 : Phaser.Keyboard.DOWN,
            44 : Phaser.Keyboard.UP 
        };
        
        for(var key in this.game.global['player1KeyIndexArray']) {
            this.indexToUsed[this.game.global['player1KeyIndexArray'][key]] = true;
        }
        for(var key in this.game.global['player2KeyIndexArray']) {
            this.indexToUsed[this.game.global['player2KeyIndexArray'][key]] = true;
        }
        console.log(this.indexToUsed);
        
        this.backgroundWall = this.game.add.tileSprite(0,0,this.game.width, this.game.height, 'settingBackGroundPic');
        this.titleText = this.game.add.text(this.game.world.centerX, 55, "Settings");
        this.titleText.fontSize = 50;
        this.titleText.anchor.setTo(.5);
        this.titleText.font = 'Press Start 2P';
        this.titleText.stroke = '#000000';
        this.titleText.strokeThickness = 6;
        this.titleText.fill = '#ffffff';
        
        // this.p1Space = this.game.add.tileSprite(21,95,290, 225, ''brick_wall_dark');
        // this.p1Space = this.game.add.tileSprite(345,95,290, 225, ''brick_wall_dark');
        
        this.p1Title = this.game.add.text(this.game.width*13/50, this.game.width*9/50, "Player 1 Controls");
        this.p1Title.fontSize = 15;
        this.p1Title.anchor.setTo(.5);
        this.p1Title.font = 'Press Start 2P';
        this.p1Title.stroke = '#000000';
        this.p1Title.strokeThickness = 6;
        this.p1Title.fill = '#ffffff';
        
        this.p2Title = this.game.add.text(this.game.width*38/50, this.game.width*9/50, "Player 2 Controls");
        this.p2Title.fontSize = 15;
        this.p2Title.anchor.setTo(.5);
        this.p2Title.font = 'Press Start 2P';
        this.p2Title.stroke = '#000000';
        this.p2Title.strokeThickness = 6;
        this.p2Title.fill = '#ffffff';
        
        this.leftText1 = this.game.add.text(100, 150, "Left:");
        this.leftText1.fontSize = 13;
        this.leftText1.anchor.setTo(.5);
        this.leftText1.font = 'Press Start 2P';
        this.leftText1.stroke = '#000000';
        this.leftText1.strokeThickness = 6;
        this.leftText1.fill = '#ffffff';
        
        this.rightText1 = this.game.add.text(100, 185, "Right:");
        this.rightText1.fontSize = 13;
        this.rightText1.anchor.setTo(.5);
        this.rightText1.font = 'Press Start 2P';
        this.rightText1.stroke = '#000000';
        this.rightText1.strokeThickness = 6;
        this.rightText1.fill = '#ffffff';
        
        this.downText1 = this.game.add.text(100, 220, "Down:");
        this.downText1.fontSize = 13;
        this.downText1.anchor.setTo(.5);
        this.downText1.font = 'Press Start 2P';
        this.downText1.stroke = '#000000';
        this.downText1.strokeThickness = 6;
        this.downText1.fill = '#ffffff';
        
        this.rotateLeftText1 = this.game.add.text(100, 255, "Rotate L:");
        this.rotateLeftText1.fontSize = 13;
        this.rotateLeftText1.anchor.setTo(.5);
        this.rotateLeftText1.font = 'Press Start 2P';
        this.rotateLeftText1.stroke = '#000000';
        this.rotateLeftText1.strokeThickness = 6;
        this.rotateLeftText1.fill = '#ffffff';
        
        this.rotateRightText1 = this.game.add.text(100, 290, "Rotate R:");
        this.rotateRightText1.fontSize = 13;
        this.rotateRightText1.anchor.setTo(.5);
        this.rotateRightText1.font = 'Press Start 2P';
        this.rotateRightText1.stroke = '#000000';
        this.rotateRightText1.strokeThickness = 6;
        this.rotateRightText1.fill = '#ffffff';
        
        this.leftText2 = this.game.add.text(425, 150, "Left:");
        this.leftText2.fontSize = 13;
        this.leftText2.anchor.setTo(.5);
        this.leftText2.font = 'Press Start 2P';
        this.leftText2.stroke = '#000000';
        this.leftText2.strokeThickness = 6;
        this.leftText2.fill = '#ffffff';
        
        this.rightText2 = this.game.add.text(425, 185, "Right:");
        this.rightText2.fontSize = 13;
        this.rightText2.anchor.setTo(.5);
        this.rightText2.font = 'Press Start 2P';
        this.rightText2.stroke = '#000000';
        this.rightText2.strokeThickness = 6;
        this.rightText2.fill = '#ffffff';
        
        this.downText2 = this.game.add.text(425, 220, "Down:");
        this.downText2.fontSize = 13;
        this.downText2.anchor.setTo(.5);
        this.downText2.font = 'Press Start 2P';
        this.downText2.stroke = '#000000';
        this.downText2.strokeThickness = 6;
        this.downText2.fill = '#ffffff';
    
        this.rotateLeftText2 = this.game.add.text(425, 255, "Rotate L:");
        this.rotateLeftText2.fontSize = 13;
        this.rotateLeftText2.anchor.setTo(.5);
        this.rotateLeftText2.font = 'Press Start 2P';
        this.rotateLeftText2.stroke = '#000000';
        this.rotateLeftText2.strokeThickness = 6;
        this.rotateLeftText2.fill = '#ffffff';
    
        this.rotateRightText2 = this.game.add.text(425, 290, "Rotate R:");
        this.rotateRightText2.fontSize = 13;
        this.rotateRightText2.anchor.setTo(.5);
        this.rotateRightText2.font = 'Press Start 2P';
        this.rotateRightText2.stroke = '#000000';
        this.rotateRightText2.strokeThickness = 6;
        this.rotateRightText2.fill = '#ffffff';
        
        this.saveButton = this.game.add.sprite(this.game.world.centerX, this.game.height*18/20, 'save');
        this.saveButton.height = 70;
        this.saveButton.width = 90;
        this.saveButton.anchor.setTo(.5);
        this.saveButton.inputEnabled = true;
        this.saveButton.input.useHandCursor = true;
        this.saveButton.events.onInputDown.add(this.goToMainMenu, this);
        
        //p1 Side
        //BTW terrible names i know, the name corresponds to "player + control + Left/Right arrow"
        this.p1LeftRight = this.game.add.sprite(280,145,'settingsArrow');
        this.p1LeftRight.anchor.setTo(.5);
        this.p1LeftRight.width = 20;
        this.p1LeftRight.height = 20;
        this.p1LeftRight.inputEnabled = true;
        this.p1LeftRight.input.useHandCursor = true;
        this.p1LeftRight.events.onInputDown.add(function() { this.arrowClicked(true,0,false)}, this);
        
        this.p1RightRight = this.game.add.sprite(280,180,'settingsArrow');
        this.p1RightRight.anchor.setTo(.5);
        this.p1RightRight.width = 20;
        this.p1RightRight.height = 20;
        this.p1RightRight.inputEnabled = true;
        this.p1RightRight.input.useHandCursor = true;
        this.p1RightRight.events.onInputDown.add(function() { this.arrowClicked(true,1,false)}, this);
        
        this.p1DownRight = this.game.add.sprite(280,215,'settingsArrow');
        this.p1DownRight.anchor.setTo(.5);
        this.p1DownRight.width = 20;
        this.p1DownRight.height = 20;
        this.p1DownRight.inputEnabled = true;
        this.p1DownRight.input.useHandCursor = true;
        this.p1DownRight.events.onInputDown.add(function() { this.arrowClicked(true,2,false)}, this);
        
        this.p1RotateLRight = this.game.add.sprite(280,250,'settingsArrow');
        this.p1RotateLRight.anchor.setTo(.5);
        this.p1RotateLRight.width = 20;
        this.p1RotateLRight.height = 20;
        this.p1RotateLRight.inputEnabled = true;
        this.p1RotateLRight.input.useHandCursor = true;
        this.p1RotateLRight.events.onInputDown.add(function() { this.arrowClicked(true,3,false)}, this);
        
        this.p1RotateRRight = this.game.add.sprite(280,285,'settingsArrow');
        this.p1RotateRRight.anchor.setTo(.5);
        this.p1RotateRRight.width = 20;
        this.p1RotateRRight.height = 20;
        this.p1RotateRRight.inputEnabled = true;
        this.p1RotateRRight.input.useHandCursor = true;
        this.p1RotateRRight.events.onInputDown.add(function() { this.arrowClicked(true,4,false)}, this);
        
        this.p1LeftLeft = this.game.add.sprite(190,145,'settingsArrow');
        this.p1LeftLeft.anchor.setTo(.5);
        this.p1LeftLeft.width = 20;
        this.p1LeftLeft.height = 20;
        this.p1LeftLeft.scale.x *= -1;
        this.p1LeftLeft.inputEnabled = true;
        this.p1LeftLeft.input.useHandCursor = true;
        this.p1LeftLeft.events.onInputDown.add(function() { this.arrowClicked(true,0,true)}, this);
        
        this.p1RightLeft = this.game.add.sprite(190,180,'settingsArrow');
        this.p1RightLeft.anchor.setTo(.5);
        this.p1RightLeft.width = 20;
        this.p1RightLeft.height = 20;
        this.p1RightLeft.scale.x *= -1;
        this.p1RightLeft.inputEnabled = true;
        this.p1RightLeft.input.useHandCursor = true;
        this.p1RightLeft.events.onInputDown.add(function() { this.arrowClicked(true,1,true)}, this);
        
        this.p1DownLeft = this.game.add.sprite(190,215,'settingsArrow');
        this.p1DownLeft.anchor.setTo(.5);
        this.p1DownLeft.width = 20;
        this.p1DownLeft.height = 20;
        this.p1DownLeft.scale.x *= -1;
        this.p1DownLeft.inputEnabled = true;
        this.p1DownLeft.input.useHandCursor = true;
        this.p1DownLeft.events.onInputDown.add(function() { this.arrowClicked(true,2,true)}, this);
        
        this.p1RotateLLeft = this.game.add.sprite(190,250,'settingsArrow');
        this.p1RotateLLeft.anchor.setTo(.5);
        this.p1RotateLLeft.width = 20;
        this.p1RotateLLeft.height = 20;
        this.p1RotateLLeft.scale.x *= -1;
        this.p1RotateLLeft.inputEnabled = true;
        this.p1RotateLLeft.input.useHandCursor = true;
        this.p1RotateLLeft.events.onInputDown.add(function() { this.arrowClicked(true,3,true)}, this);
        
        this.p1RotateRLeft = this.game.add.sprite(190,285,'settingsArrow');
        this.p1RotateRLeft.anchor.setTo(.5);
        this.p1RotateRLeft.width = 20;
        this.p1RotateRLeft.height = 20;
        this.p1RotateRLeft.scale.x *= -1;
        this.p1RotateRLeft.inputEnabled = true;
        this.p1RotateRLeft.input.useHandCursor = true;
        this.p1RotateRLeft.events.onInputDown.add(function() { this.arrowClicked(true,4,true)}, this);
        
        //The text within the arrows
        this.p1LeftKeyText = this.game.add.text(235,150,this.indexToKeys[this.game.global['player1KeyIndexArray'][0]]);
        this.p1LeftKeyText.font = 'Press Start 2P';
        this.p1LeftKeyText.fontSize = 13;
        this.p1LeftKeyText.anchor.setTo(.5);
        this.p1LeftKeyText.font = 'Press Start 2P';
        this.p1LeftKeyText.stroke = '#000000';
        this.p1LeftKeyText.strokeThickness = 6;
        this.p1LeftKeyText.fill = '#ffffff';
        
        this.p1RightKeyText = this.game.add.text(235,185,this.indexToKeys[this.game.global['player1KeyIndexArray'][1]]);
        this.p1RightKeyText.font = 'Press Start 2P';
        this.p1RightKeyText.fontSize = 13;
        this.p1RightKeyText.anchor.setTo(.5);
        this.p1RightKeyText.font = 'Press Start 2P';
        this.p1RightKeyText.stroke = '#000000';
        this.p1RightKeyText.strokeThickness = 6;
        this.p1RightKeyText.fill = '#ffffff';
        
        this.p1DownKeyText = this.game.add.text(235,220,this.indexToKeys[this.game.global['player1KeyIndexArray'][2]]);
        this.p1DownKeyText.font = 'Press Start 2P';
        this.p1DownKeyText.fontSize = 13;
        this.p1DownKeyText.anchor.setTo(.5);
        this.p1DownKeyText.font = 'Press Start 2P';
        this.p1DownKeyText.stroke = '#000000';
        this.p1DownKeyText.strokeThickness = 6;
        this.p1DownKeyText.fill = '#ffffff';
        
        this.p1RotateLKeyText = this.game.add.text(235,255,this.indexToKeys[this.game.global['player1KeyIndexArray'][3]]);
        this.p1RotateLKeyText.font = 'Press Start 2P';
        this.p1RotateLKeyText.fontSize = 13;
        this.p1RotateLKeyText.anchor.setTo(.5);
        this.p1RotateLKeyText.font = 'Press Start 2P';
        this.p1RotateLKeyText.stroke = '#000000';
        this.p1RotateLKeyText.strokeThickness = 6;
        this.p1RotateLKeyText.fill = '#ffffff';
        
        this.p1RotateRKeyText = this.game.add.text(235,290,this.indexToKeys[this.game.global['player1KeyIndexArray'][4]]);
        this.p1RotateRKeyText.font = 'Press Start 2P';
        this.p1RotateRKeyText.fontSize = 13;
        this.p1RotateRKeyText.anchor.setTo(.5);
        this.p1RotateRKeyText.font = 'Press Start 2P';
        this.p1RotateRKeyText.stroke = '#000000';
        this.p1RotateRKeyText.strokeThickness = 6;
        this.p1RotateRKeyText.fill = '#ffffff';
        
        //p2 Side
        //Again the terrible arrow names correspond to "player + control + left/right arrow"
        this.p2LeftRight = this.game.add.sprite(605,145,'settingsArrow');
        this.p2LeftRight.anchor.setTo(.5);
        this.p2LeftRight.width = 20;
        this.p2LeftRight.height = 20;
        this.p2LeftRight.inputEnabled = true;
        this.p2LeftRight.input.useHandCursor = true;
        this.p2LeftRight.events.onInputDown.add(function() { this.arrowClicked(false,0,false)}, this);
        
        this.p2RightRight = this.game.add.sprite(605,180,'settingsArrow');
        this.p2RightRight.anchor.setTo(.5);
        this.p2RightRight.width = 20;
        this.p2RightRight.height = 20;
        this.p2RightRight.inputEnabled = true;
        this.p2RightRight.input.useHandCursor = true;
        this.p2RightRight.events.onInputDown.add(function() { this.arrowClicked(false,1,false)}, this);
        
        this.p2DownRight = this.game.add.sprite(605,215,'settingsArrow');
        this.p2DownRight.anchor.setTo(.5);
        this.p2DownRight.width = 20;
        this.p2DownRight.height = 20;
        this.p2DownRight.inputEnabled = true;
        this.p2DownRight.input.useHandCursor = true;
        this.p2DownRight.events.onInputDown.add(function() { this.arrowClicked(false,2,false)}, this);
        
        this.p2RotateLRight = this.game.add.sprite(605,250,'settingsArrow');
        this.p2RotateLRight.anchor.setTo(.5);
        this.p2RotateLRight.width = 20;
        this.p2RotateLRight.height = 20;
        this.p2RotateLRight.inputEnabled = true;
        this.p2RotateLRight.input.useHandCursor = true;
        this.p2RotateLRight.events.onInputDown.add(function() { this.arrowClicked(false,3,false)}, this);
        
        this.p2RotateRRight = this.game.add.sprite(605,285,'settingsArrow');
        this.p2RotateRRight.anchor.setTo(.5);
        this.p2RotateRRight.width = 20;
        this.p2RotateRRight.height = 20;
        this.p2RotateRRight.inputEnabled = true;
        this.p2RotateRRight.input.useHandCursor = true;
        this.p2RotateRRight.events.onInputDown.add(function() { this.arrowClicked(false,4,false)}, this);
        
        this.p2LeftLeft = this.game.add.sprite(515,145,'settingsArrow');
        this.p2LeftLeft.anchor.setTo(.5);
        this.p2LeftLeft.width = 20;
        this.p2LeftLeft.height = 20;
        this.p2LeftLeft.scale.x *= -1;
        this.p2LeftLeft.inputEnabled = true;
        this.p2LeftLeft.input.useHandCursor = true;
        this.p2LeftLeft.events.onInputDown.add(function() { this.arrowClicked(false,0,true)}, this);
        
        this.p2RightLeft = this.game.add.sprite(515,180,'settingsArrow');
        this.p2RightLeft.anchor.setTo(.5);
        this.p2RightLeft.width = 20;
        this.p2RightLeft.height = 20;
        this.p2RightLeft.scale.x *= -1;
        this.p2RightLeft.inputEnabled = true;
        this.p2RightLeft.input.useHandCursor = true;
        this.p2RightLeft.events.onInputDown.add(function() { this.arrowClicked(false,1,true)}, this);
        
        this.p2DownLeft = this.game.add.sprite(515,215,'settingsArrow');
        this.p2DownLeft.anchor.setTo(.5);
        this.p2DownLeft.width = 20;
        this.p2DownLeft.height = 20;
        this.p2DownLeft.scale.x *= -1;
        this.p2DownLeft.inputEnabled = true;
        this.p2DownLeft.input.useHandCursor = true;
        this.p2DownLeft.events.onInputDown.add(function() { this.arrowClicked(false,2,true)}, this);
        
        this.p2RotateLLeft = this.game.add.sprite(515,250,'settingsArrow');
        this.p2RotateLLeft.anchor.setTo(.5);
        this.p2RotateLLeft.width = 20;
        this.p2RotateLLeft.height = 20;
        this.p2RotateLLeft.scale.x *= -1;
        this.p2RotateLLeft.inputEnabled = true;
        this.p2RotateLLeft.input.useHandCursor = true;
        this.p2RotateLLeft.events.onInputDown.add(function() { this.arrowClicked(false,3,true)}, this);
        
        this.p2RotateRLeft = this.game.add.sprite(515,285,'settingsArrow');
        this.p2RotateRLeft.anchor.setTo(.5);
        this.p2RotateRLeft.width = 20;
        this.p2RotateRLeft.height = 20;
        this.p2RotateRLeft.scale.x *= -1;
        this.p2RotateRLeft.inputEnabled = true;
        this.p2RotateRLeft.input.useHandCursor = true;
        this.p2RotateRLeft.events.onInputDown.add(function() { this.arrowClicked(false,4,true)}, this);
        
        this.p2LeftKeyText = this.game.add.text(560,150,this.indexToKeys[this.game.global['player2KeyIndexArray'][0]]);
        this.p2LeftKeyText.font = 'Press Start 2P';
        this.p2LeftKeyText.fontSize = 13;
        this.p2LeftKeyText.anchor.setTo(.5);
        this.p2LeftKeyText.font = 'Press Start 2P';
        this.p2LeftKeyText.stroke = '#000000';
        this.p2LeftKeyText.strokeThickness = 6;
        this.p2LeftKeyText.fill = '#ffffff';
        
        this.p2RightKeyText = this.game.add.text(560,185,this.indexToKeys[this.game.global['player2KeyIndexArray'][1]]);
        this.p2RightKeyText.font = 'Press Start 2P';
        this.p2RightKeyText.fontSize = 13;
        this.p2RightKeyText.anchor.setTo(.5);
        this.p2RightKeyText.font = 'Press Start 2P';
        this.p2RightKeyText.stroke = '#000000';
        this.p2RightKeyText.strokeThickness = 6;
        this.p2RightKeyText.fill = '#ffffff';
        
        this.p2DownKeyText = this.game.add.text(560,220,this.indexToKeys[this.game.global['player2KeyIndexArray'][2]]);
        this.p2DownKeyText.font = 'Press Start 2P';
        this.p2DownKeyText.fontSize = 13;
        this.p2DownKeyText.anchor.setTo(.5);
        this.p2DownKeyText.font = 'Press Start 2P';
        this.p2DownKeyText.stroke = '#000000';
        this.p2DownKeyText.strokeThickness = 6;
        this.p2DownKeyText.fill = '#ffffff';
        
        this.p2RotateLKeyText = this.game.add.text(560,255,this.indexToKeys[this.game.global['player2KeyIndexArray'][3]]);
        this.p2RotateLKeyText.font = 'Press Start 2P';
        this.p2RotateLKeyText.fontSize = 13;
        this.p2RotateLKeyText.anchor.setTo(.5);
        this.p2RotateLKeyText.font = 'Press Start 2P';
        this.p2RotateLKeyText.stroke = '#000000';
        this.p2RotateLKeyText.strokeThickness = 6;
        this.p2RotateLKeyText.fill = '#ffffff';
        
        this.p2RotateRKeyText = this.game.add.text(560,290,this.indexToKeys[this.game.global['player2KeyIndexArray'][4]]);
        this.p2RotateRKeyText.font = 'Press Start 2P';
        this.p2RotateRKeyText.fontSize = 13;
        this.p2RotateRKeyText.anchor.setTo(.5);
        this.p2RotateRKeyText.font = 'Press Start 2P';
        this.p2RotateRKeyText.stroke = '#000000';
        this.p2RotateRKeyText.strokeThickness = 6;
        this.p2RotateRKeyText.fill = '#ffffff';
        
        this.difficultyLeftArrow = this.game.add.sprite(this.game.world.centerX+25,350,'settingsArrow');
        this.difficultyLeftArrow.anchor.setTo(.5);
        this.difficultyLeftArrow.width = 20;
        this.difficultyLeftArrow.height = 20;
        this.difficultyLeftArrow.scale.x *= -1;
        this.difficultyLeftArrow.inputEnabled = true;
        this.difficultyLeftArrow.input.useHandCursor = true;
        this.difficultyLeftArrow.events.onInputDown.add(this.decreaseDiff, this);
        
        this.difficultyRightArrow = this.game.add.sprite(this.game.world.centerX+175,350,'settingsArrow');
        this.difficultyRightArrow.anchor.setTo(.5);
        this.difficultyRightArrow.width = 20;
        this.difficultyRightArrow.height = 20;
        this.difficultyRightArrow.inputEnabled = true;
        this.difficultyRightArrow.input.useHandCursor = true;
        this.difficultyRightArrow.events.onInputDown.add(this.increaseDiff, this);
        
        this.gameDiffTextArray = ['EASY', 'NORMAL', 'HARD'];
        this.gameDiffConstantsArray = [.66666667, 1, 2];
        
        this.difficultyText = this.game.add.text(this.game.world.centerX+100,353,this.gameDiffTextArray[this.currDifficulty]);
        this.difficultyText.font = 'Press Start 2P';
        this.difficultyText.fontSize = 13;
        this.difficultyText.anchor.setTo(.5);
        this.difficultyText.font = 'Press Start 2P';
        this.difficultyText.stroke = '#000000';
        this.difficultyText.strokeThickness = 6;
        this.difficultyText.fill = '#ffffff';
        
        this.difficultyLabel = this.game.add.text(this.game.world.centerX-75,353, "DIFFICULTY:");
        this.difficultyLabel.font = 'Press Start 2P';
        this.difficultyLabel.fontSize = 13;
        this.difficultyLabel.anchor.setTo(.5);
        this.difficultyLabel.font = 'Press Start 2P';
        this.difficultyLabel.stroke = '#000000';
        this.difficultyLabel.strokeThickness = 6;
        this.difficultyLabel.fill = '#ffffff';
        
        this.player1KeyTextArray = [this.p1LeftKeyText, this.p1RightKeyText, this.p1DownKeyText, this.p1RotateLKeyText, this.p1RotateRKeyText];
        this.player2KeyTextArray = [this.p2LeftKeyText, this.p2RightKeyText, this.p2DownKeyText, this.p2RotateLKeyText, this.p2RotateRKeyText];
    
        this.enter = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        this.enter.onDown.add(this.goToMainMenu, this);
    },
    
    decreaseDiff() {
        if(this.currDifficulty > 0) {
            this.currDifficulty--;
            this.game.global['gameDifficultyIndex']--;
        }
        this.difficultyText.setText(this.gameDiffTextArray[this.currDifficulty]);
        this.game.global['gameDifficulty'] = this.gameDiffConstantsArray[this.currDifficulty];
    },
    
    increaseDiff() {
        if(this.currDifficulty < 2) {
            this.currDifficulty++;
            this.game.global['gameDifficultyIndex']++;
        }
        this.difficultyText.setText(this.gameDiffTextArray[this.currDifficulty]);
        this.game.global['gameDifficulty'] = this.gameDiffConstantsArray[this.currDifficulty];
    },
    
    goToMainMenu() {
        this.game.global['player1LeftKey'] = this.indexToKeyboard[this.game.global['player1KeyIndexArray'][0]]
        this.game.global['player1RightKey'] = this.indexToKeyboard[this.game.global['player1KeyIndexArray'][1]]
        this.game.global['player1DownKey'] = this.indexToKeyboard[this.game.global['player1KeyIndexArray'][2]]
        this.game.global['player1RotateLKey'] = this.indexToKeyboard[this.game.global['player1KeyIndexArray'][3]]
        this.game.global['player1RotateRKey'] = this.indexToKeyboard[this.game.global['player1KeyIndexArray'][4]]
        this.game.global['player2LeftKey'] = this.indexToKeyboard[this.game.global['player2KeyIndexArray'][0]]
        this.game.global['player2RightKey'] = this.indexToKeyboard[this.game.global['player2KeyIndexArray'][1]]
        this.game.global['player2DownKey'] = this.indexToKeyboard[this.game.global['player2KeyIndexArray'][2]]
        this.game.global['player2RotateLKey'] = this.indexToKeyboard[this.game.global['player2KeyIndexArray'][3]]
        this.game.global['player2RotateRKey'] = this.indexToKeyboard[this.game.global['player2KeyIndexArray'][4]]
        this.state.start("MainMenuState"); 
    },
    
    arrowClicked(player1, controlIndex, leftArrow) {
        //Based on arrow click
        //increment or decrement the certain key index in the global state
        //make the corresponding key appear in the text
        //have to throw each key text into an array and change label based on player and control index
        if(player1) {
            console.log("player1");
            if(leftArrow) {
                this.indexToUsed[this.game.global['player1KeyIndexArray'][controlIndex]] = false;
                this.game.global['player1KeyIndexArray'][controlIndex]--;
                if(this.game.global['player1KeyIndexArray'][controlIndex] < 0) {
                    this.game.global['player1KeyIndexArray'][controlIndex] = 44;
                } 
                while(this.indexToUsed[this.game.global['player1KeyIndexArray'][controlIndex]]) {
                    this.game.global['player1KeyIndexArray'][controlIndex]--;
                    if(this.game.global['player1KeyIndexArray'][controlIndex] < 0) {
                        this.game.global['player1KeyIndexArray'][controlIndex] = 44;
                    } 
                }
                this.indexToUsed[this.game.global['player1KeyIndexArray'][controlIndex]] = true;
                this.player1KeyTextArray[controlIndex].setText(this.indexToKeys[this.game.global['player1KeyIndexArray'][controlIndex]]);
            }
            else {
                this.indexToUsed[this.game.global['player1KeyIndexArray'][controlIndex]] = false;
                this.game.global['player1KeyIndexArray'][controlIndex]++;
                if(this.game.global['player1KeyIndexArray'][controlIndex] > 44) {
                    this.game.global['player1KeyIndexArray'][controlIndex] = 0;
                } 
                while(this.indexToUsed[this.game.global['player1KeyIndexArray'][controlIndex]]) {
                    this.game.global['player1KeyIndexArray'][controlIndex]++;
                    if(this.game.global['player1KeyIndexArray'][controlIndex] > 44) {
                        this.game.global['player1KeyIndexArray'][controlIndex] = 0;
                    } 
                }
                this.indexToUsed[this.game.global['player1KeyIndexArray'][controlIndex]] = true;
                this.player1KeyTextArray[controlIndex].setText(this.indexToKeys[this.game.global['player1KeyIndexArray'][controlIndex]]);
            }
        }
        else {
            if(leftArrow) {
                this.indexToUsed[this.game.global['player2KeyIndexArray'][controlIndex]] = false;
                this.game.global['player2KeyIndexArray'][controlIndex]--;
                if(this.game.global['player2KeyIndexArray'][controlIndex] < 0) {
                    this.game.global['player2KeyIndexArray'][controlIndex] = 44;
                } 
                while(this.indexToUsed[this.game.global['player2KeyIndexArray'][controlIndex]]) {
                    this.game.global['player2KeyIndexArray'][controlIndex]--;
                    if(this.game.global['player2KeyIndexArray'][controlIndex] < 0) {
                        this.game.global['player2KeyIndexArray'][controlIndex] = 44;
                    } 
                }
                this.indexToUsed[this.game.global['player2KeyIndexArray'][controlIndex]] = true;
                this.player2KeyTextArray[controlIndex].setText(this.indexToKeys[this.game.global['player2KeyIndexArray'][controlIndex]]);
            }
            else {
                this.indexToUsed[this.game.global['player2KeyIndexArray'][controlIndex]] = false;
                this.game.global['player2KeyIndexArray'][controlIndex]++;
                if(this.game.global['player2KeyIndexArray'][controlIndex] > 44) {
                    this.game.global['player2KeyIndexArray'][controlIndex] = 0;
                } 
                while(this.indexToUsed[this.game.global['player2KeyIndexArray'][controlIndex]]) {
                    this.game.global['player2KeyIndexArray'][controlIndex]++;
                    if(this.game.global['player2KeyIndexArray'][controlIndex] > 44) {
                        this.game.global['player2KeyIndexArray'][controlIndex] = 0;
                    } 
                }
                this.indexToUsed[this.game.global['player2KeyIndexArray'][controlIndex]] = true;
                this.player2KeyTextArray[controlIndex].setText(this.indexToKeys[this.game.global['player2KeyIndexArray'][controlIndex]]);
                
            }
        }
        console.log(this.indexToUsed);
    }
};