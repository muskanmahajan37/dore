angular
  .module('starter.controllers', [])
  .controller('DashCtrl', function ($scope, $ionicPlatform) {
    $scope.version = null;
    $scope.text = 'Text Copy';
    $scope.copyText = '';
    DoreClient.addStateListener();
    $ionicPlatform.on('STATE', function (event) {
      $scope.state = event.detail.data;
      $scope.$apply();
    });

    $ionicPlatform.on('ANDROID_BACK', function (event) {
      DoreClient.showToast('ANDROID_BACK');
    });

    DoreClient.getAppVersion().then(function (data) {
      $scope.version = data.version;
      $scope.$apply();
    });
    $scope.showToast = function () {
      DoreClient.showToast('this is a toast');
    };
    $scope.showToastCenter = function () {
      DoreClient.showToast('this is a toast', 'long', 'center');
    };
    $scope.open = function () {
      DoreClient.open('https://www.phodal.com/');
    };
    $scope.copy = function () {
      DoreClient.copy($scope.text);
    };
    $scope.paste = function () {
      $ionicPlatform.on('PASTE', function (event) {
        $scope.copyText = event.detail.data;
        $scope.$apply();
      });
      DoreClient.paste();
    };

    $scope.getBadge = function () {
      DoreClient.getBadge().then(function (data) {
        $scope.badge = data.badge;
        $scope.$apply();
      })
    };
    $scope.setBadge = function () {
      DoreClient.setBadge(19);
    };
    $scope.clearBadge = function () {
      DoreClient.clearBadge();
    };
    $scope.showDatePicker = function () {
      var options = {
        date: '2017-10-22 12:12:12',
        maxDate: '2022-10-22 12:12:12'
      };
      DoreClient.showDatePicker(options).then(function (data) {
        $scope.date = data.date;
        $scope.$apply();
      });
    };

    $scope.getCurrentPosition = function () {
      DoreClient.getCurrentPosition().then(function (data) {
        $scope.location = data;
        $scope.$apply();
      });
    };
    $scope.watchPosition = function () {
      $ionicPlatform.on('WATCH_POSITION', function (event) {
        $scope.wPosition = event.detail.data;
        $scope.$apply();
      });
      DoreClient.watchPosition();
    };
    $scope.clearWatch = function () {
      DoreClient.clearWatch();
    };
    $scope.stopObserving = function () {
      DoreClient.stopObserving();
    };
    $scope.getOrientation = function () {
      DoreClient.getOrientation().then(function (data) {
        $scope.orientation = data;
        $scope.$apply();
      });
    };
    $scope.lockToLandscape = function () {
      DoreClient.lockToLandscape();
    };
    $scope.lockToPortrait = function () {
      DoreClient.lockToPortrait();
    };
    $scope.getConnectionInfo = function () {
      DoreClient.getConnectionInfo().then(function (data) {
        $scope.connectionInfo = data;
        $scope.$apply();
      });
    };
    $scope.addEventListener = function () {
      $ionicPlatform.on('CONNECTION_CHANGE', function (event) {
        $scope.wConnectionInfo = event.detail.data;
        $scope.$apply();
      });
      DoreClient.addNetInfoEventListener();
    };
    $scope.removeEventListener = function () {
      DoreClient.removeNetInfoEventListener();
    };
    $scope.hideStatusBar = function () {
      DoreClient.hideStatusBar();
    };
    $scope.showStatusBar = function () {
      DoreClient.showStatusBar();
    };
    $scope.vibrationVibrate = function () {
      DoreClient.vibrationVibrate([1000, 2000, 3000]);
    };
    $scope.vibrationCancel = function () {
      DoreClient.vibrationCancel();
    };
    $scope.getBrightness = function () {
      DoreClient.getBrightnessLevel().then(function (brightness) {
        $scope.brightness = brightness;
        $scope.$apply();
      })
    };
    $scope.setBrightness = function () {
      DoreClient.setBrightnessLevel(0.2);
    };
    $scope.checkPermissions = function () {
      DoreClient.checkPermissions('camera').then(function (response) {
        DoreClient.showToast(JSON.stringify(response));
      })
    };
    $scope.requestPermissions = function () {
      DoreClient.requestPermissions('camera').then(function (response) {
        DoreClient.showToast(JSON.stringify(response));
      })
    };
    $scope.checkMultiple = function () {
      DoreClient.checkMultiple(['camera', 'photo']).then(function (response) {
        DoreClient.showToast(JSON.stringify(response));
      })
    };
    $scope.captureScreen = function () {
      DoreClient.captureScreen().then(function (response) {
        DoreClient.showToast(JSON.stringify(response));
      })
    };
    $scope.console = console; //  can use inline console function after register
    $scope.outputSingleObject = function () {
      var someObject = {str: "Some text", id: 5};
      console.log(someObject);
    };
    $scope.outputMultipleObjects = function () {
      var car = "Dodge Charger";
      var someObject = {str: "Some text", id: 5};
      var optionalParams = [car, ". The object is:", someObject];
      console.info("My first car was a", optionalParams);
    };
    $scope.stringSubstitutions = function () {
      for (var i = 0; i < 5; i++) {
        var optionalParams = ["Bob", i + 1];
        console.log("Hello, %s. You've called me %d times.", optionalParams);
      }
    };
    $scope.stylingConsoleOutput = function () {
      var optionalParams = ["color: yellow; font-style: italic; background-color: blue;padding: 2px"];
      console.log("This is %cMy stylish message", optionalParams);
    };
    $scope.groupInTheConsole = function () {
      console.log("This is the outer level");
      console.group();
      console.log("Level 2");
      console.group();
      console.log("Level 3");
      console.warn("More of level 3");
      console.groupEnd();
      console.log("Back to level 2");
      console.groupEnd();
      console.debug("Back to the outer level");
    };
    $scope.timers = function () {
      console.time("answer time");
      alert("Click to continue");
      console.timeEnd("answer time");
    };
    $scope.stackTraces = function () {
      function foo() {
        function bar() {
          console.trace();
        }

        bar();
      }

      foo();
    };
    $scope.setAsyncStorage = function (key, data) {
      DoreClient.setAsyncStorage(key, data);
    };

    $scope.getAsyncStorage = function (key) {
      DoreClient.getAsyncStorage(key).then(function (response) {
        $scope.storage = response.data;
        $scope.$apply();
      })
    };
    $scope.checkURLScheme = function () {
      DoreClient.checkURLScheme('whatsapp').then(function (response) {
        $scope.isAppInstalled = response;
        $scope.$apply();
      })
    };
    $scope.addShakeListener = function () {
      $ionicPlatform.on('SHAKE', function (response) {
        $scope.shake = response.detail.data;
        $scope.$apply();
      });
      DoreClient.addShakeListener();
    };
    $scope.removeShakeListener = function () {
      DoreClient.removeShakeListener();
    };
    $scope.onFlashlight = function () {
      DoreClient.onFlashlight();
    };
    $scope.offFlashlight = function () {
      DoreClient.offFlashlight();
    };
    $scope.sendSMS = function () {
      DoreClient.sendSMS({
        body: 'Hello, world',
        recipients: ['10086']
      });
    };
    $scope.calendarAuthorizationStatus = function () {
      DoreClient.calendarAuthorizationStatus().then(function (response) {
        $scope.authStatus = response;
        $scope.$apply();
      });
    };
    $scope.requestCalendarAuthorize = function () {
      DoreClient.requestCalendarAuthorize();
    };
    $scope.saveCalendar = function () {
      DoreClient.saveCalendar("title",
        {
          location: 'location',
          notes: 'notes',
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString()
        }).then(function (response) {
        console.log(response);
      })
    };
    $scope.findCalendars = function () {
      DoreClient.findCalendars().then(function (response) {
        console.log(response);
        $scope.calendars = response;
        $scope.$apply();
      })
    };
    $scope.fetchAllCalendar = function () {
      DoreClient.fetchAllCalendar('2017-12-26T19:26:00.000Z',
        '2018-01-1T19:26:00.000Z', ['1', '2']).then(function (response) {
        console.log(response);
        $scope.fetchCalendars = response;
        $scope.$apply();
      })
    };
    $scope.removeFirstCalendar = function () {
      DoreClient.fetchAllCalendar('2017-12-26T19:26:00.000Z',
        '2018-01-1T19:26:00.000Z', ['1', '2']).then(function (response) {
        console.log(response);
        if (response.length < 1) {
          return DoreClient.showToast("请先创建日历");
        }
        var lastCalendar = response[0];
        DoreClient.removeCalendar(lastCalendar.id)
      })
    };
    $scope.findEventById = function () {
      DoreClient.findEventById("297D3B27-4070-49A4-8BF9-1E7631727B4A").then(function (response) {
        console.log(response);
        $scope.savedCalendar = response;
        $scope.$apply();
      })
    };
    $scope._test_sqlite_functional = function () { // Test functional
      function operationDataBase(webview, db) {
        console.log('open then');
        db.executeSql('SELECT 1 FROM Version LIMIT 1')
          .then(function (result) {
            console.log('executeSql then');
            console.log(result);

            function queryEmployees(tx) {
              console.log("Executing employee query");
              tx.executeSql('SELECT a.name, b.name as deptName FROM Employees a, Departments b WHERE a.department = b.department_id').then(([tx, results]) => {

                var payload = {}
                payload.result = []
                payload.type = 'OPERATION_DATABASEE_DONE_QUERY_DB';
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  payload.result.push(row)
                }

                webview.postMessage(JSON.stringify(payload));
              }).catch((error) => {
                console.log(error);
              });
            }

            db.transaction(queryEmployees).then(() => {
              console.log('query done.')
            });
          })
          .catch(function (err) {
            console.log('executeSql catch');
            console.log(err);
            db.transaction(function (tx) {
              tx.executeSql('DROP TABLE IF EXISTS Employees;');
              tx.executeSql('DROP TABLE IF EXISTS Offices;');
              tx.executeSql('DROP TABLE IF EXISTS Departments;');

              tx.executeSql('CREATE TABLE IF NOT EXISTS Version( '
                + 'version_id INTEGER PRIMARY KEY NOT NULL); ').catch((error) => {
                console.log(error);
              });

              tx.executeSql('CREATE TABLE IF NOT EXISTS Departments( '
                + 'department_id INTEGER PRIMARY KEY NOT NULL, '
                + 'name VARCHAR(30) ); ').catch((error) => {
                console.log(error)
              });

              tx.executeSql('CREATE TABLE IF NOT EXISTS Offices( '
                + 'office_id INTEGER PRIMARY KEY NOT NULL, '
                + 'name VARCHAR(20), '
                + 'longtitude FLOAT, '
                + 'latitude FLOAT ) ; ').catch((error) => {
                console.log(error)
              });

              tx.executeSql('CREATE TABLE IF NOT EXISTS Employees( '
                + 'employe_id INTEGER PRIMARY KEY NOT NULL, '
                + 'name VARCHAR(55), '
                + 'office INTEGER, '
                + 'department INTEGER, '
                + 'FOREIGN KEY ( office ) REFERENCES Offices ( office_id ) '
                + 'FOREIGN KEY ( department ) REFERENCES Departments ( department_id ));').catch((error) => {
                console.log(error)
              });

              tx.executeSql('INSERT INTO Departments (name) VALUES ("Client Services");');
              tx.executeSql('INSERT INTO Departments (name) VALUES ("Investor Services");');
              tx.executeSql('INSERT INTO Departments (name) VALUES ("Shipping");');
              tx.executeSql('INSERT INTO Departments (name) VALUES ("Direct Sales");');

              tx.executeSql('INSERT INTO Offices (name, longtitude, latitude) VALUES ("Denver", 59.8,  34.1);');
              tx.executeSql('INSERT INTO Offices (name, longtitude, latitude) VALUES ("Warsaw", 15.7, 54.1);');
              tx.executeSql('INSERT INTO Offices (name, longtitude, latitude) VALUES ("Berlin", 35.3, 12.1);');
              tx.executeSql('INSERT INTO Offices (name, longtitude, latitude) VALUES ("Paris", 10.7, 14.1);');

              tx.executeSql('INSERT INTO Employees (name, office, department) VALUES ("Sylvester Stallone", 2,  4);');
              tx.executeSql('INSERT INTO Employees (name, office, department) VALUES ("Elvis Presley", 2, 4);');
              tx.executeSql('INSERT INTO Employees (name, office, department) VALUES ("Leslie Nelson", 3,  4);');
              tx.executeSql('INSERT INTO Employees (name, office, department) VALUES ("Fidel Castro", 3, 3);');
              tx.executeSql('INSERT INTO Employees (name, office, department) VALUES ("Bill Clinton", 1, 3);');
              tx.executeSql('INSERT INTO Employees (name, office, department) VALUES ("Margaret Thatcher", 1, 3);');
              tx.executeSql('INSERT INTO Employees (name, office, department) VALUES ("Donald Trump", 1, 3);');
              tx.executeSql('INSERT INTO Employees (name, office, department) VALUES ("Dr DRE", 2, 2);');
              tx.executeSql('INSERT INTO Employees (name, office, department) VALUES ("Samantha Fox", 2, 1);');
              console.log("all executed SQL done");
              webview.postMessage(JSON.stringify({
                type: "OPERATION_DATABASEE_DONE_CREATE_TABLE_AND_INSERT_DATA",
                result: 'init table done.'
              }));
            })
          })
      }

      function errorCB(error) {
        console.log(error)
      }

      var SQLite = DoreClient.SQLite;
      SQLite.open(
        'test.db',
        '1.0',
        'SQLite test databases',
        200000,
        operationDataBase,
        errorCB)
        .then(function (payload) {
          console.log('open then');
          console.log(payload);
          alert(JSON.stringify(payload))
        })
        .catch(function (err) {
          console.log(err)
        })
    };
  })

  .controller('DeviceCtrl', function ($scope) {
    $scope.getAppVersion = function () {
      DoreClient.getAppVersion().then(function (data) {
        $scope.version = data.version;
        $scope.$apply();
      });
    };
    $scope.getUniqueID = function () {
      DoreClient.getUniqueID().then(function (data) {
        $scope.uniqueID = data.uniqueID;
        $scope.$apply();
      });
    };
    $scope.getBrand = function () {
      DoreClient.getBrand().then(function (data) {
        $scope.brand = data.brand;
        $scope.$apply();
      });
    };
    $scope.getModel = function () {
      DoreClient.getModel().then(function (data) {
        $scope.model = data.model;
        $scope.$apply();
      });
    };
    $scope.getSystemName = function () {
      DoreClient.getSystemName().then(function (data) {
        $scope.systemName = data.systemName;
        $scope.$apply();
      });
    };
    $scope.isEmulator = function () {
      DoreClient.isEmulator().then(function (data) {
        $scope.isEmulator = data;
        $scope.$apply();
      });
    };
    $scope.isTablet = function () {
      DoreClient.isTablet().then(function (data) {
        $scope.isTablet = data;
        $scope.$apply();
      });
    };
  });
