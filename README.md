<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Example Backend for CRUD Application aplying the concepts of  Clean arquitecture

## Technologies

Typescript, NestJS, Mongoose, MongoDB, Docker 

## Running the app

```bash
$ docker-compose up
```

## Situation
'M&O Accountants' process requirements and data validations as well as notify about missing receipts and

approvals for monthly reports. Jesus, our best and only developer was assigned to create a form input with the following fields:

Contacting Company's Name

Fiscal ID Code

Client Number

Receipts List - Each one with:

Date

Tax Amount

Tax Percentage

We need to check that the Fiscal ID is valid in an external API. This process should be non-blocking and provide some kind of notification to the user that the input was processed correctly. Our accountants should be able to have a screen that shows them all the forms that were entered and checked by the API and be able to approve them (with an approve button is enough).

### Assumptions
- The client number is unique and it is generated manually by the user
- The receipts list is not mandatory
- The receipts list can have more than one receipt
- The receipts list can have repeated receipts
- The fiscal id code is not unique
- The resources are public
- All the users can perform all the actions
