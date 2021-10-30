import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLConfigModule } from './graphql/graphql.module';
import { MikroOrmConfigModule } from './mikroorm/mikroorm.module';

@Module({
  imports: [ConfigModule.forRoot(), MikroOrmConfigModule, GraphQLConfigModule],
  exports: [ConfigModule, MikroOrmConfigModule, GraphQLConfigModule],
})
export class TemplateConfigModule {}
