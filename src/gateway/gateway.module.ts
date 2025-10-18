import { Module } from '@nestjs/common';
import { AuthGatewayController } from './auth.gateway.controller';
import { UserGatewayController } from './user.gateway.controller';
import { MicroserviceClientsModule } from './clients.module';
import { StaffGatewayController } from './staff.gateway.controller';
import { AccessControlGatewayController } from './access_control.gateway.controller';
import { CarModelGatewayController } from './car-model.gateway.controller';
import { CarMakeGatewayController } from './car-make.gateway.controller';
import { CarGatewayController } from './car.gatway.controller';
import { BookingGatewayController } from './booking.gateway.controller';
import { ReviewGatewayController } from './review.gateway.controller';
import { DisputeGatewayController } from './dispute.gateway.controller';
import { CancellationPolicyGatewayController } from './cancellation-policy.gateway.controller';
import { MessageGatewayController } from './message.gateway.controller';

@Module({
  imports: [MicroserviceClientsModule],
  controllers: [
    AuthGatewayController,
    UserGatewayController,
    StaffGatewayController,
    AccessControlGatewayController,
    CarModelGatewayController,
    CarMakeGatewayController,
    CarGatewayController,
    BookingGatewayController,
    ReviewGatewayController,
    DisputeGatewayController,
    CancellationPolicyGatewayController,
    MessageGatewayController,
  ],
})
export class GatewayModule {}
