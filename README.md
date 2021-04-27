# NGRX Tutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## How to install # NGRX

npm install @ngrx/store

## How to install # NGRX - Store-devtools

npm install @ngrx/store-devtools

### This code segment should add to app-modules
StoreDevtoolsModule.instrument({ <br>
maxAge: 25, // Retains last 25 states  <br>
logOnly: environment.production, // Restrict extension to log-only mode <br>
}),
