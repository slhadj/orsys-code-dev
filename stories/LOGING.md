# Feature: SignUp

## DATA: 
> USER - valid
```json
{
    "email" : "orsys@orsys.fr",
    "password" : "orsys"
}

```
> STRANGER - Invalid
```json
{
    "email" : "orsys@orsys.fr",
    "password" : "stranger"
}

```
## Overall:
 * IF: HOME return button
 * IF: glogal navigation home/singin/signup
 * IF: Current navigation selected
 * IF: page tittle
 * IF: footer return button
 * IF: external links 

## Feature:
 IF: page title "sign in"
    alternate process
    initial state

### Feature: Case DATA
* DATA: Generic email
*   DATA: Password
*   IF button activated

### Feature: Case USER
*   DATA: USER
*   IF: process complete

### Feature: Case USER
*    DATA: STRANGER
*    IF: process fail
> MESSAGE: 