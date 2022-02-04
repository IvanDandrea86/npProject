import { prop } from "@typegoose/typegoose";
import { Field, InputType, ObjectType,} from "type-graphql";
import {User} from '../entities/user.entity'
import { Request,Response } from "express";
import { Redis } from "ioredis";


export type MyContext={
  res:Response
  req:Request
  redis:Redis 
}


@InputType()
export class UserInfoInput {

  @Field(()=>Number,{ defaultValue: 0 })
  @prop( { default: 0 })
  age :number;

  @Field(()=>[String])
  @prop({type:[String]})
  interest :string[];

  @Field(() => String)
  @prop(String)
  job :string;
  @Field(() => String)
  @prop(String)
  bio :string;

  constructor(age:number,interest:Array<string>,job:string,bio:string){
    this.age=age;
    this.interest=interest;
    this.job=job;
    this.bio=bio;
  }
  }

@ObjectType() 
export class UserInfo {

    @Field(()=>Number,{ defaultValue: 0 })
    @prop( { default: 0 })
    age :number;

    @Field(()=>[String])
    @prop({type:[String]})
    interest :string[];

    @Field(() => String)
    @prop(String)
    job :string;
    @Field(() => String)
    @prop(String)
    bio :string;

    // constructor(age:number,interest:Array<string>,job:string,bio:string){
    //   this.age=age;
    //   this.interest=interest;
    //   this.job=job;
    //   this.bio=bio;
    // }
    }



@ObjectType()
export class LikeState {

    @Field({ defaultValue: 0 })
    @prop({ default: 0 })
    count :number;
    
    @Field(()=>[String])
    @prop({type:[String]})
    likelist :string[]

    constructor (){
    this.count= 0;
    this.likelist=new Array();
    }
}
@ObjectType()
export class FieldError {
  @Field(() => String)
  field: string;
  @Field(() => String)
  message: string;
  constructor(field:string,message:string){
    this.field=field;
    this.message=message;
  }
}
@ObjectType()
export class UserResponse {
  @Field(() => FieldError, { nullable: true })
  errors?: FieldError;
  @Field(() => User, { nullable: true })
  user?: User;
}
@ObjectType()
export class FriendResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => User, { nullable: true })
  user?: User;
}


